import dbConnect from "@/app/lib/dbConnect";
import Product from "@/app/lib/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
