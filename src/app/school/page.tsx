
import AddSchool from "./addSchool";
import UpdateSchool from "./updateSchool";
import DeleteSchool from "./deleteSchool";

import DefaultLayout from "@/components/Layouts/DefaultLayout";


import prisma from "@/lib/db";

const pageSize = async () => {
    let pageBaseSize = 5;
    let pageCount = await prisma.school.count();
    return pageCount < pageBaseSize ? pageCount : pageBaseSize;
};

const getSchools = async () => {
    const res = await prisma.school.findMany({
        orderBy: {
            name: "desc",
        },
        select: {
            id: true,
            name: true,
            phone: true,
            email: true,
            street: true,
            city: true,
            state: true,
            zip: true,
            active: true,
        },
        take: await pageSize(),
        // skip: pageSize(),
        // take: 5,
    });
    return res;
};

const School = async () => {
    const schools = await getSchools();
    return (
        <DefaultLayout>
            <div className="flex flex-col gap-10">
                <div className="mb-2">
                    <AddSchool />
                </div>
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[1170px]">
                        <div className="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
                            <div className="col-span-4">
                                <h5 className="font-medium text-white">School Name</h5>
                            </div>
                            <div className="col-span-2">
                                <h5 className="font-medium text-white">Address</h5>
                            </div>
                            <div className="col-span-2">
                                <h5 className="text-right font-medium text-white">Street</h5>
                            </div>
                            <div className="col-span-2">
                                <h5 className="text-right font-medium text-white text-left">Options</h5>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-boxdark rounded-b-[10px]">
                        {schools.map((school: any) => (
                            <div key={school.id} className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                                <div className="col-span-4">
                                    <h2 className="h5">
                                        {school.name}
                                    </h2>
                                    {school.phone}
                                </div>
                                <div className="col-span-2">
                                    {school.street}{' '}
                                    {school.city}
                                </div>
                                <div className="col-span-2 text-right">{school.state}</div>
                                <div className="col-span-2 flex align-left justify-end text-left">
                                    <UpdateSchool school={school} />
                                    <DeleteSchool school={school} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default School;