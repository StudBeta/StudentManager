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
        const { user_id, first_name, last_name, email, password, role_id } = JSON.parse(req.body);

        const newUser = new User({ user_id, first_name, last_name, email, password, role_id });
        const savedUser = await newUser.save();
        return NextResponse.json(savedUser);
      } catch (err: any) {
        return NextResponse.json({ error: err.message });
      }

    case "PUT":
      try {
        const { user_id, first_name, last_name, email, password, role_id } = JSON.parse(req.body);
        const updatedUser = await User.findByIdAndUpdate(
          id,
          { user_id, first_name, last_name, email, password, role_id },
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