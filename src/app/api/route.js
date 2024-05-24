import { initMongoose } from "@/models/mongodb";
import { Medicine } from "@/models/schema";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await initMongoose();
    return NextResponse.json({ msg: 'Successfully' }, { status: 200});
  } catch (error) {
    return NextResponse.json({ errMsg: error }, { status: 500});
  }
}
