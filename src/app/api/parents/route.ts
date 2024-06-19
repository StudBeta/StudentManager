import dbConnect from "@/app/lib/dbConnect";
import Parent from "@/app/lib/models/Parent";
import { NextResponse } from "next/server";

export default async function handler(req: any, res: any) {
  await dbConnect();

  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const parents = await Parent.find({});
        return NextResponse.json(parents);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "POST":
      try {
        const { parent_id, user_id, student_id } = JSON.parse(req.body);

        const newParent = new Parent({ parent_id, user_id, student_id });
        const savedParent = await newParent.save();
        return NextResponse.json(savedParent);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "PUT":
      try {
        const { parent_id, user_id, student_id } = JSON.parse(req.body);
        const updatedParent = await Parent.findByIdAndUpdate(
          id,
          { parent_id, user_id, student_id },
          { new: true }
        );

        if (!updatedParent) {
          return NextResponse.json({ error: `Parent with ID ${id} not found` });
        }

        return NextResponse.json(updatedParent);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "DELETE":
      try {
        const deletedParent = await Parent.findByIdAndDelete(id);

        if (!deletedParent) {
          return NextResponse.json({ error: `Parent with ID ${id} not found` });
        }

        return NextResponse.json({
          message: `Parent with ID ${id} deleted successfully`,
        });
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    default:
      return NextResponse.json({ error: `Method ${method} Not Allowed` });
  }
}