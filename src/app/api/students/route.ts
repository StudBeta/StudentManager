import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Student } from "@prisma/client";
import prisma from "@/lib/db";

export const STUDENT = async (request: Request) => {
  const body: Student = await request.json();
  const student = await prisma.student.create({
    data: {
      title: body.title,
      price: body.price,
      brandId: body.brandId,
    },
  });
  return NextResponse.json(student, { status: 201 });
};
