import dbConnect from "@/app/lib/dbConnect";
import School from "@/app/lib/models/School";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  await dbConnect();

  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const schools = await School.find({});
        return NextResponse.json(schools);
      } catch (err) {
        return NextResponse.json({ error: err.message });
      }

    case "POST":
      try {
        const { name, address } = JSON.parse(req.body);
        const newSchool = new School({ name, address });
        const savedSchool = await newSchool.save();
        return NextResponse.json(savedSchool);
      } catch (err) {
        return NextResponse.json({ error: err.message });
      }

    case "PUT":
      try {
        const { name, address } = JSON.parse(req.body);
        const updatedSchool = await School.findByIdAndUpdate(
          id,
          { name, address },
          { new: true }
        );

        if (!updatedSchool) {
          return NextResponse.json({ error: `School with ID ${id} not found` });
        }

        return NextResponse.json(updatedSchool);
      } catch (err) {
        return NextResponse.json({ error: err.message });
      }

    case "DELETE":
      try {
        const deletedSchool = await School.findByIdAndDelete(id);

        if (!deletedSchool) {
          return NextResponse.json({ error: `School with ID ${id} not found` });
        }

        return NextResponse.json({
          message: `School with ID ${id} deleted successfully`,
        });
      } catch (err) {
        return NextResponse.json({ error: err.message });
      }

    default:
      return NextResponse.json({ error: `Method ${method} Not Allowed` });
  }
}
