"use client";
import { useState, SyntheticEvent } from "react";
import type { Brand } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

const UpdateSchool = ({ school }: { school: any }) => {
    const [name, setName] = useState(school.name);
    const [phone, setPhone] = useState(school.phone);
    const [email, setEmail] = useState(school.email);
    const [street, setStreet] = useState(school.street);
    const [city, setCity] = useState(school.city);
    const [state, setState] = useState(school.state);
    const [zip, setZip] = useState(school.zip);


    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await axios.patch(`/api/schools/${school.id}`, {
            name: name,
            phone: phone,
            email: email,
            street: street,
            city: city,
            state: state,
            zip: zip,
        });
        setIsLoading(false);
        router.refresh();
        setIsOpen(false);
    };

    const handleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="btn btn-info btn-sm" onClick={handleModal}>
                <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z"
                        fill=""
                    />
                    <path
                        d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z"
                        fill=""
                    />
                </svg>
            </button>
            <div className={isOpen ? "fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5" : "hidden"}>
                <div className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
                    <h3 className="font-bold text-lg">Update {school.name}</h3>
                    <form onSubmit={handleUpdate}>
                        <div className="form-control w-full">
                            <label className="label font-bold">School Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered" placeholder="School Name" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Phone Number</label>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="input input-bordered" placeholder="Phone Number" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Email Address</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered" placeholder="Email Address" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Street Address</label>
                            <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} className="input input-bordered" placeholder="Street Address" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">City</label>
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="input input-bordered" placeholder="City" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">State</label>
                            <input type="text" value={state} onChange={(e) => setState(e.target.value)} className="input input-bordered" placeholder="State" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Zip Code</label>
                            <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} className="input input-bordered" placeholder="Zip Code" />
                        </div>

                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleModal}>
                                Close
                            </button>
                            {!isLoading ? (
                                <button type="submit" className="btn btn-primary">Update</button>
                            ) : (
                                <button type="button" className="btn loading">Updating...</button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateSchool;
