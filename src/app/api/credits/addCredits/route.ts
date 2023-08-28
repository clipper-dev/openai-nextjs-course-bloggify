import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
  typescript: true,
});

const withApiAuthRequiredExtended = withApiAuthRequired as any;

export const POST = withApiAuthRequiredExtended(
  async (request: NextRequest, response: NextResponse) => {
    const { db } = await connectToDatabase();
    try {
      const session = await getSession(request, response);
      const user = session?.user;
      if (!user) {
        return NextResponse.error();
      }
      const purchasedItems = [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ];

      const stripeSession = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: purchasedItems,
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_URL}/profile`,
        payment_intent_data: {
          metadata: {
            uid: user.sub,
            
          },
        },
        metadata: {
          uid: user.sub,
          
        },
      });

      return NextResponse.json(
        { message: "success", session: stripeSession },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.error();
    }
  }
);
