import dbConnect from "@/app/lib/dbConnect";
import School from "@/app/lib/models/School";
import { NextResponse } from "next/server";

export async function getSchools(req: any, res: any) {
  await dbConnect();

  try {
    const schools = await School.find({});
    return NextResponse.json(schools);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

export async function createSchool(req: any, res: any) {
  await dbConnect();

  try {
    const { name, address } = JSON.parse(req.body);
    const newSchool = new School({ name, address });
    const savedSchool = await newSchool.save();
    return NextResponse.json(savedSchool);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

export async function updateSchool(req: any, res: any) {
  await dbConnect();

  const { id } = req.query;

  try {
    const { name, address } = JSON.parse(req.body);
    const updatedSchool = await School.findByIdAndUpdate(id, { name, address }, { new: true });
    if (!updatedSchool) {
      return NextResponse.json({ error: `School with ID ${id} not found` });
    }

    return NextResponse.json(updatedSchool);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

export async function deleteSchool(req: any, res: any) {
  await dbConnect();

  const { id } = req.query;

  try {
    const deletedSchool = await School.findByIdAndDelete(id);
    if (!deletedSchool) {
      return NextResponse.json({ error: `School with ID ${id} not found` });
    }

    return NextResponse.json({ message: `School with ID ${id} deleted successfully` });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
