import Calendar from "@/components/Calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import StudentList from "@/components/StudentList";
import TableOne from "@/components/Tables/TableOne";
// import Page from "../products/page";

export const metadata: Metadata = {
    title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
    description:
        "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
};

const CalendarPage = async () => {
    return (
        <DefaultLayout>

            <TableOne />
        </DefaultLayout>
    );
};

export default CalendarPage;
