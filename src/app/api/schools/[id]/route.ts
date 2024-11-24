import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { School } from "@prisma/client";

import prisma from "@/lib/db";

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const body: School = await request.json();
  const school = await prisma.product.update({
    where: {
      id: Number(params.id),
    },
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
  return NextResponse.json(school, { status: 200 });
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const school = await prisma.school.delete({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(product, { status: 200 });
};
