
import Addmission from "./Addmission";
// import UpdateSchool from "./updateSchool";
// import DeleteSchool from "./deleteSchool";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
// import { getSchools } from "../utils/common";

import prisma from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const getSchools = async () => {
    const res = await prisma.school.findMany({});
    const result = res.length ? res : null;
    return result;
};

const AddStudent = async () => {
    const schools = await getSchools();
    return (
        <DefaultLayout>
            <div className="flex flex-col gap-10">
                <div className="mb-2">
                    <Addmission school={schools} />
                </div>
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[1170px]">
                        <div className="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
                            <div className="col-span-4">
                                <h5 className="font-medium text-white">Student Name</h5>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h5 className="font-medium text-white">School</h5>
                        </div>
                        <div className="col-span-2">
                            <h5 className="text-right font-medium text-white">Grade</h5>
                        </div>
                        <div className="col-span-2">
                            <h5 className="text-right font-medium text-white text-left">Options</h5>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default AddStudent;
