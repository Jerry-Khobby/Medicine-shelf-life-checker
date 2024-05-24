import { initiMongoose } from "@/lib/mongodb";
import Medicine from "@/models/schema";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await initiMongoose();
    const data= await Medicine.find({})
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ errMsg: error }, { status: 500});
  }
}
