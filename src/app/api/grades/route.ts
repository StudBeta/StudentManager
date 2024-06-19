import dbConnect from "@/app/lib/dbConnect";
import Grade from "@/app/lib/models/Grade";
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
        const grades = await Grade.find({});
        return NextResponse.json(grades);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "POST":
      try {
        const { grade_id, student_id, subject_id, grade_value, grade_date } = JSON.parse(req.body);

        const newGrade = new Grade({ grade_id, student_id, subject_id, grade_value, grade_date });
        const savedGrade = await newGrade.save();
        return NextResponse.json(savedGrade);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "PUT":
      try {
        const { grade_id, student_id, subject_id, grade_value, grade_date } = JSON.parse(req.body);
        const updatedGrade = await Grade.findByIdAndUpdate(
          id,
          { grade_id, student_id, subject_id, grade_value, grade_date },
          { new: true }
        );

        if (!updatedGrade) {
          return NextResponse.json({ error: `Grade with ID ${id} not found` });
        }

        return NextResponse.json(updatedGrade);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "DELETE":
      try {
        const deletedGrade = await Grade.findByIdAndDelete(id);

        if (!deletedGrade) {
          return NextResponse.json({ error: `Grade with ID ${id} not found` });
        }

        return NextResponse.json({
          message: `Grade with ID ${id} deleted successfully`,
        });
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    default:
      return NextResponse.json({ error: `Method ${method} Not Allowed` });
  }
}