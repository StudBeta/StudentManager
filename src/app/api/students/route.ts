import dbConnect from "@/app/lib/dbConnect";
import Student from "@/app/lib/models/Student";
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
        const students = await Student.find({});
        return NextResponse.json(students);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "POST":
      try {
        const { student_id, user_id, class_id, enrollment_date } = JSON.parse(req.body);

        const newStudent = new Student({ student_id, user_id, class_id, enrollment_date });
        const savedStudent = await newStudent.save();
        return NextResponse.json(savedStudent);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "PUT":
      try {
        const { student_id, user_id, class_id, enrollment_date } = JSON.parse(req.body);
        const updatedStudent = await Student.findByIdAndUpdate(
          id,
          { student_id, user_id, class_id, enrollment_date },
          { new: true }
        );

        if (!updatedStudent) {
          return NextResponse.json({ error: `Student with ID ${id} not found` });
        }

        return NextResponse.json(updatedStudent);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "DELETE":
      try {
        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
          return NextResponse.json({ error: `Student with ID ${id} not found` });
        }

        return NextResponse.json({
          message: `Student with ID ${id} deleted successfully`,
        });
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    default:
      return NextResponse.json({ error: `Method ${method} Not Allowed` });
  }
}