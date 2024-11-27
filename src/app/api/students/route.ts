import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Student } from "@prisma/client";
import prisma from "@/lib/db";

export const POST = async (request: Request) => {
  const body: Student = await request.json();
  const student = await prisma.student.create({
    data: {
      name: body.name,
      schoolId: body.schoolId,
    },
  });
  return NextResponse.json(student, { status: 201 });
};
