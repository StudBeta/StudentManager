import dbConnect from "@/app/lib/dbConnect";
import school from "@/app/lib/models/School";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const schools = await school.find({});
    return NextResponse.json(schools);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
