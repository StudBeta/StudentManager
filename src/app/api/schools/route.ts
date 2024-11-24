import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { School } from "@prisma/client";
import prisma from "@/lib/db";

// const prisma = new PrismaClient();
export const SCHOOL = async (request: Request) => {
  const body: School = await request.json();
  const school = await prisma.product.create({
    data: {
      name: body.name,
      phone: body.phone,
      email: body.email,
      street: body.street,
      city: body.city,
      state: body.state,
      zip: body.zip,
      active: body.active,
    },
  });
  return NextResponse.json(school, { status: 201 });
};
