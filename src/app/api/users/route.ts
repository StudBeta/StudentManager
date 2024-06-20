import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/lib/models/User";
import { NextResponse } from "next/server";

export async function getUsers(req: any, res: any) {
  await dbConnect();
  
  try {
    const users = await User.find({});
    return NextResponse.json(users);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

export async function createUser(req: any, res: any) {
  await dbConnect();

  try {
    const { user_id, first_name, last_name, email, password, role_id } = JSON.parse(req.body);
    const newUser = new User({ user_id, first_name, last_name, email, password, role_id });
    const savedUser = await newUser.save();
    return NextResponse.json(savedUser);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

export async function updateUser(req: any, res: any) {
  await dbConnect();

  const { id } = req.query;

  try {
    const { user_id, first_name, last_name, email, password, role_id } = JSON.parse(req.body);
    const updatedUser = await User.findByIdAndUpdate(id, { user_id, first_name, last_name, email, password, role_id }, { new: true });

    if (!updatedUser) {
      return NextResponse.json({ error: `User with ID ${id} not found` });
    }

    return NextResponse.json(updatedUser);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

export async function deleteUser(req: any, res: any) {
  await dbConnect();

  const { id } = req.query;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json({ error: `User with ID ${id} not found` });
    }

    return NextResponse.json({ message: `User with ID ${id} deleted successfully` });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
