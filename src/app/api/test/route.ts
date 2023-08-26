import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";

export async function GET(request: NextRequest, response: NextResponse) {
  const { db } = await connectToDatabase();
  try {
    const test = await db.collection("test").find({}).toArray();
    return NextResponse.json({ message: "Hello World", data: test }, { status: 200 });
  } catch (error) {
    return NextResponse.error();
  }
}
