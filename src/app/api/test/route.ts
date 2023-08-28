import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

const withApiAuthRequiredExtended = withApiAuthRequired as any;

export const GET = withApiAuthRequiredExtended(async (request: NextRequest, response: NextResponse) => {
  //const { db } = await connectToDatabase();
  try {
    //const test = await db.collection("test").find({}).toArray();
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
  } catch (error) {
    return NextResponse.error();
  }
})
