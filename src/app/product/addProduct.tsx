"use client";
import { useState, SyntheticEvent } from "react";
import type { Brand } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddProduct = ({ brands }: { brands: Brand[] }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await axios.post("/api/products", {
            title: title,
            price: Number(price),
            brandId: Number(brand),
        });
        setIsLoading(false);
        setTitle("");
        setPrice("");
        setBrand("");
        router.refresh();
        setIsOpen(false);
    };

    const handleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="rounded-md bg-primary px-9 py-3 font-medium text-white" onClick={handleModal}>
                Add New
            </button>

            <div className={isOpen ? "fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5" : "hidden"}>
                <div className="w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:px-17.5 md:py-15">
                    <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">Add New Product</h3>
                    <span className="mx-auto mb-6 inline-block h-1 w-22.5 rounded bg-primary"></span>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full">
                            <label className="label font-bold">Product Name</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="input input-bordered"
                                placeholder="Product Name"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Price</label>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="input input-bordered"
                                placeholder="Price"
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">Brand</label>
                            <select
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                className="select select-bordered"
                            >
                                <option value="" disabled>
                                    Select a Brand
                                </option>
                                {brands.map((brand) => (
                                    <option value={brand.id} key={brand.id}>
                                        {brand.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="-mx-3 flex flex-wrap gap-y-4">
                            <div className="w-full px-3 2xsm:w-1/2">
                                <button type="button" className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1" onClick={handleModal}>
                                    Close
                                </button>
                            </div>
                            <div className="w-full px-3 2xsm:w-1/2">
                                {!isLoading ? (
                                    <button type="submit" className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90">
                                        Save
                                    </button>
                                ) : (
                                    <button type="button" className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90">
                                        Saving...
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;