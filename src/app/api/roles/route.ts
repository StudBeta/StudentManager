import dbConnect from "@/app/lib/dbConnect";
import Role from "@/app/lib/models/Role";
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
        const roles = await Role.find({});
        return NextResponse.json(roles);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "POST":
      try {
        const { role_id, role_name } = JSON.parse(req.body);

        const newRole = new Role({ role_id, role_name });
        const savedRole = await newRole.save();
        return NextResponse.json(savedRole);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "PUT":
      try {
        const { role_id, role_name } = JSON.parse(req.body);
        const updatedRole = await Role.findByIdAndUpdate(
          id,
          { role_id, role_name },
          { new: true }
        );

        if (!updatedRole) {
          return NextResponse.json({ error: `Role with ID ${id} not found` });
        }

        return NextResponse.json(updatedRole);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "DELETE":
      try {
        const deletedRole = await Role.findByIdAndDelete(id);

        if (!deletedRole) {
          return NextResponse.json({ error: `Role with ID ${id} not found` });
        }

        return NextResponse.json({
          message: `Role with ID ${id} deleted successfully`,
        });
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    default:
      return NextResponse.json({ error: `Method ${method} Not Allowed` });
  }
}