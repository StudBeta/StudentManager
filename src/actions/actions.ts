"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createStudent(formData: FormData) {
  try {
    await prisma.student.create({
      data: {
        name: formData.get("name")?.toString() || "",
        age: Number(formData.get("age")),
        grade: Number(formData.get("grade")),
        studentImage:
          formData.get("studentImage") instanceof File
            ? Buffer.from(
                await formData.get("studentImage")!.arrayBuffer(),
              ).toString("base64")
            : "",
        address: formData.get("address")?.toString() || "",
        ParentPhone: formData.get("parentPhone")?.toString() || "",
        AlternatePhone: formData.get("alternatePhone")?.toString() || "",
        Email: formData.get("email")?.toString() || "",
        Birthdate: new Date(formData.get("birthdate")?.toString() || ""),
        Gender: formData.get("gender")?.toString() || "",
        FatherName: formData.get("fatherName")?.toString() || "",
        MotherName: formData.get("motherName")?.toString() || "",
        FatherPhone: formData.get("fatherPhone")?.toString() || "",
        MotherPhone: formData.get("motherPhone")?.toString() || "",
        FatherEmail: formData.get("fatherEmail")?.toString() || "",
        MotherEmail: formData.get("motherEmail")?.toString() || "",
        FatherAddress: formData.get("fatherAddress")?.toString() || "",
        MotherAddress: formData.get("motherAddress")?.toString() || "",
        EmergencyName: formData.get("emergencyName")?.toString() || "",
        EmergencyPhone: formData.get("emergencyPhone")?.toString() || "",
        EmergencyEmail: formData.get("emergencyEmail")?.toString() || "",
        EmergencyAddress: formData.get("emergencyAddress")?.toString() || "",
        EmergencyRelation: formData.get("emergencyRelation")?.toString() || "",
        AdditionalInfo: formData.get("additionalInfo")?.toString() || "",
      },
    });
    revalidatePath("/student");
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
}

export async function deleteStudent(id: number) {
  try {
    await prisma.student.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/student");
  } catch (error) {
    console.error("Error deleting student:", error);
    throw error;
  }
}

export async function editStudent(formData: FormData) {
  try {
    const studentId = parseInt(formData.get("id")?.toString() || "0");

    await prisma.student.update({
      where: {
        id: studentId,
      },
      data: {
        name: formData.get("name")?.toString() || "",
        age: parseInt(formData.get("age")?.toString() || "0"),
        grade: parseInt(formData.get("grade")?.toString() || "0"),
        studentImage:
          formData.get("studentImage") instanceof File
            ? Buffer.from(
                await formData.get("studentImage")!.arrayBuffer(),
              ).toString("base64")
            : undefined,
        address: formData.get("address")?.toString() || "",
        ParentPhone: formData.get("parentPhone")?.toString() || "",
        AlternatePhone: formData.get("alternatePhone")?.toString() || "",
        Email: formData.get("email")?.toString() || "",
        Birthdate: new Date(formData.get("birthdate")?.toString() || ""),
        Gender: formData.get("gender")?.toString() || "",
        FatherName: formData.get("fatherName")?.toString() || "",
        MotherName: formData.get("motherName")?.toString() || "",
        FatherPhone: formData.get("fatherPhone")?.toString() || "",
        MotherPhone: formData.get("motherPhone")?.toString() || "",
        FatherEmail: formData.get("fatherEmail")?.toString() || "",
        MotherEmail: formData.get("motherEmail")?.toString() || "",
        FatherAddress: formData.get("fatherAddress")?.toString() || "",
        MotherAddress: formData.get("motherAddress")?.toString() || "",
        EmergencyName: formData.get("emergencyName")?.toString() || "",
        EmergencyPhone: formData.get("emergencyPhone")?.toString() || "",
        EmergencyEmail: formData.get("emergencyEmail")?.toString() || "",
        EmergencyAddress: formData.get("emergencyAddress")?.toString() || "",
        EmergencyRelation: formData.get("emergencyRelation")?.toString() || "",
        AdditionalInfo: formData.get("additionalInfo")?.toString() || "",
      },
    });
    revalidatePath("/student");
  } catch (error) {
    console.error("Error updating student:", error);
    throw error;
  }
}

export async function createSchool(formData: FormData) {
  try {
    await prisma.school.create({
      data: {
        name: formData.get("name")?.toString() || "",
      },
    });
    revalidatePath("/school");
  } catch (error) {
    console.error("Error creating school:", error);
    throw error;
  }
}

export async function editSchool(formData: FormData) {
  try {
    const schoolId = parseInt(formData.get("id")?.toString() || "0");

    await prisma.school.update({
      where: {
        id: schoolId,
      },
      data: {
        name: formData.get("name")?.toString() || "",
      },
    });
    revalidatePath("/school");
  } catch (error) {
    console.error("Error editing school:", error);
    throw error;
  }
}

export async function deleteSchool(schoolId: number) {
  try {
    await prisma.school.delete({
      where: {
        id: schoolId,
      },
    });
    revalidatePath("/school");
  } catch (error) {
    console.error("Error deleting school:", error);
    throw error;
  }
}
