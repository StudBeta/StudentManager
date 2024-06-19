import dbConnect from "@/app/lib/dbConnect";
import Class from "@/app/lib/models/Class";
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
        const classes = await Class.find({});
        return NextResponse.json(classes);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "POST":
      try {
        const { class_id, class_name, teacher_id } = JSON.parse(req.body);

        const newClass = new Class({ class_id, class_name, teacher_id });
        const savedClass = await newClass.save();
        return NextResponse.json(savedClass);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "PUT":
      try {
        const { class_id, class_name, teacher_id } = JSON.parse(req.body);
        const updatedClass = await Class.findByIdAndUpdate(
          id,
          { class_id, class_name, teacher_id },
          { new: true }
        );

        if (!updatedClass) {
          return NextResponse.json({ error: `Class with ID ${id} not found` });
        }

        return NextResponse.json(updatedClass);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "DELETE":
      try {
        const deletedClass = await Class.findByIdAndDelete(id);

        if (!deletedClass) {
          return NextResponse.json({ error: `Class with ID ${id} not found` });
        }

        return NextResponse.json({
          message: `Class with ID ${id} deleted successfully`,
        });
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    default:
      return NextResponse.json({ error: `Method ${method} Not Allowed` });
  }
}