import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/lib/models/User";
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
        const users = await User.find({});
        return NextResponse.json(users);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "POST":
      try {
        const { userName, password, role } = JSON.parse(req.body);

        // Check if the role is valid
        const validRoles: string[] = ["teacher", "headOfSchool", "student", "superAdmin", "administrator", "receptionist"];
        if (!validRoles.includes(role)) {
          return NextResponse.json({ error: "Invalid role" });
        }

        const newUser = new User({ userName, password, role });
        const savedUser = await newUser.save();
        return NextResponse.json(savedUser);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "PUT":
      try {
        const { userName, password, role } = JSON.parse(req.body);
        const updatedUser = await User.findByIdAndUpdate(
          id,
          { userName, password, role },
          { new: true }
        );

        if (!updatedUser) {
          return NextResponse.json({ error: `User with ID ${id} not found` });
        }

        return NextResponse.json(updatedUser);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "DELETE":
      try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
          return NextResponse.json({ error: `User with ID ${id} not found` });
        }

        return NextResponse.json({
          message: `User with ID ${id} deleted successfully`,
        });
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    default:
      return NextResponse.json({ error: `Method ${method} Not Allowed` });
  }
}
