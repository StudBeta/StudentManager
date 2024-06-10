import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Product } from "@/types/product";
import { Student } from '@/types/student';

const studentData: Student[] = [
    {
        image: "/images/product/product-01.png",
        name: "Surendra Aswal",
        category: "Electronics",
        price: 296,
        sold: 22,
        profit: 45,
    },
    {
        image: "/images/product/product-02.png",
        name: "Vajhath Sheikh",
        category: "Electronics",
        price: 546,
        sold: 12,
        profit: 125,
    },
    {
        image: "/images/product/product-03.png",
        name: "Jameel Ahamed",
        category: "Electronics",
        price: 443,
        sold: 64,
        profit: 247,
    },
    {
        image: "/images/product/product-01.png",
        name: "Tanoj Kuchipudi",
        category: "Electronics",
        price: 499,
        sold: 72,
        profit: 103,
    },
    {
        image: "/images/product/product-02.png",
        name: "Abhisek Mishra",
        category: "Electronics",
        price: 499,
        sold: 72,
        profit: 103,
    },
    {
        image: "/images/product/product-03.png",
        name: "Kalpashree Gowda",
        category: "Electronics",
        price: 499,
        sold: 72,
        profit: 103,
    },
    {
        image: "/images/product/product-01.png",
        name: "Vijay Anand",
        category: "Electronics",
        price: 499,
        sold: 72,
        profit: 103,
    },
    {
        image: "/images/product/product-02.png",
        name: "Jayant",
        category: "Electronics",
        price: 499,
        sold: 72,
        profit: 103,
    },
];
const StudentList = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <Breadcrumb pageName="Student List" />
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                    <div className="col-span-3 flex items-center">
                        <p className="font-medium">Student Name</p>
                    </div>
                    <div className="col-span-2 hidden items-center sm:flex">
                        <p className="font-medium">Class</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="font-medium">Price</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="font-medium">Sold</p>
                    </div>
                    <div className="col-span-1 flex items-center">
                        <p className="font-medium">Action</p>
                    </div>
                </div>

                {studentData.map((product, key) => (
                    <div
                        className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
                        key={key}
                    >
                        <div className="col-span-3 flex items-center">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <div className="h-12.5 w-15 rounded-md">
                                    <Image
                                        src={product.image}
                                        width={60}
                                        height={50}
                                        alt="Product"
                                    />
                                </div>
                                <p className="text-sm text-black dark:text-white">
                                    {product.name}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 hidden items-center sm:flex">
                            <p className="text-sm text-black dark:text-white">
                                {product.category}
                            </p>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <p className="text-sm text-black dark:text-white">
                                ${product.price}
                            </p>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <p className="text-sm text-black dark:text-white">{product.sold}</p>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <p className="text-sm text-meta-3">${product.profit}</p>
                        </div>
                    </div>
                ))}
                <div className="p-4 sm:p-6 xl:p-7.5"><nav><ul className="flex flex-wrap items-center"><li><a className="flex h-9 w-9 items-center justify-center rounded-l-md border border-stroke hover:border-primary hover:bg-gray hover:text-primary dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark" href="#"><svg className="fill-current" width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.17578 15.1156C7.00703 15.1156 6.83828 15.0593 6.72578 14.9187L0.369531 8.44995C0.116406 8.19683 0.116406 7.80308 0.369531 7.54995L6.72578 1.0812C6.97891 0.828076 7.37266 0.828076 7.62578 1.0812C7.87891 1.33433 7.87891 1.72808 7.62578 1.9812L1.71953 7.99995L7.65391 14.0187C7.90703 14.2718 7.90703 14.6656 7.65391 14.9187C7.48516 15.0312 7.34453 15.1156 7.17578 15.1156Z" fill=""></path></svg></a></li><li><a className="flex items-center justify-center border border-stroke border-l-transparent px-4 py-[5px] font-medium hover:border-primary hover:bg-gray hover:text-primary dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark" href="#">1</a></li><li><a className="flex items-center justify-center border border-stroke border-l-transparent px-4 py-[5px] font-medium hover:border-primary hover:bg-gray hover:text-primary dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark" href="#">2</a></li><li><a className="flex items-center justify-center border border-stroke border-l-transparent px-4 py-[5px] font-medium hover:border-primary hover:bg-gray hover:text-primary dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark" href="#">3</a></li><li><a className="flex items-center justify-center border border-stroke border-l-transparent px-4 py-[5px] font-medium hover:border-primary hover:bg-gray hover:text-primary dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark" href="#">4</a></li><li><a className="flex items-center justify-center border border-stroke border-l-transparent px-4 py-[5px] font-medium hover:border-primary hover:bg-gray hover:text-primary dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark" href="#">5</a></li><li><a className="flex h-9 w-9 items-center justify-center rounded-r-md border border-stroke border-l-transparent hover:border-primary hover:bg-gray hover:text-primary dark:border-strokedark dark:hover:border-primary dark:hover:bg-graydark" href="#"><svg className="fill-current" width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.819531 15.1156C0.650781 15.1156 0.510156 15.0593 0.369531 14.9468C0.116406 14.6937 0.116406 14.3 0.369531 14.0468L6.27578 7.99995L0.369531 1.9812C0.116406 1.72808 0.116406 1.33433 0.369531 1.0812C0.622656 0.828076 1.01641 0.828076 1.26953 1.0812L7.62578 7.54995C7.87891 7.80308 7.87891 8.19683 7.62578 8.44995L1.26953 14.9187C1.15703 15.0312 0.988281 15.1156 0.819531 15.1156Z" fill=""></path></svg></a></li></ul></nav></div>
            </div>
        </div>
    );
};


export default StudentList;
