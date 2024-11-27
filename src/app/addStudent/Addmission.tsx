"use client"
import { useState, SyntheticEvent } from "react";
import type { School } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

const Addmission = ({ school }) => {

    const [studentName, setStudentName] = useState("");
    const [grade, setGrade] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post("/api/students", {
                studentName,
                schoolId: schoolName,
                grade,
            });
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            return;
        }
        setIsLoading(false);
        setStudentName("");
        setGrade("");
        setSchoolName("");
        router.refresh();
        setIsOpen(false);
    };
    const handleModal = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <button className="rounded-md bg-primary px-9 py-3 font-medium text-white" onClick={handleModal}>
                Add New
            </button>
            <div className={isOpen ? "fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5" : "hidden"}>
                <div className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
                    <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">Add New Student</h3>
                    <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>

                    <div className="w-full max-w-lg mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form-control w-full">
                                <label className="label font-bold">Student Name</label>
                                <input
                                    type="text"
                                    value={studentName}
                                    onChange={(e) => setStudentName(e.target.value)}
                                    className="input input-bordered"
                                    placeholder="Student Name"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label font-bold">School</label>
                                <select
                                    value={school}
                                    onChange={(e) => setSchoolName(e.target.value)}
                                    className="input input-bordered"
                                >
                                    {school?.map((s: any) => (
                                        <option key={s.id} value={s.id}>
                                            {s.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="
                    mb-3 block text-sm font-medium text-black dark:text-white text-left">
                                    Grade
                                </label>
                                <input
                                    type="text"
                                    value={grade}
                                    onChange={(e) => setGrade(e.target.value)}
                                    className="input input-bordered"
                                    placeholder="Grade"
                                />
                                <button
                                    type="submit"
                                    className={`
                        w-full py-3 mt-3 text-white transition-all duration-200 bg-primary hover:bg-primary-dark focus:outline-none focus:shadow-outline
                        ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
                        `}
                                >Close</button>
                                <button
                                    type="submit"
                                    className={`
                        w-full py-3 mt-3 text-white transition-all duration-200 bg-primary hover:bg-primary-dark focus:outline-none focus:shadow-outline
                        ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
                        `}
                                >Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Addmission;