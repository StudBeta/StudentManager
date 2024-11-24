
import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


import prisma from "@/lib/db";


const getProducts = async () => {
    const res = await prisma.product.findMany({
        select: {
            id: true,
            title: true,
            price: true,
            brandId: true,
            brand: true,
        },
    });
    return res;
};

const getBrands = async () => {
    const res = await prisma.brand.findMany();
    return res;
};

const Product = async () => {
    const [products, brands] = await Promise.all([getProducts(), getBrands()]);

    return (
        <DefaultLayout>
            <div className="flex flex-col gap-10">
                <div className="mb-2">
                    <AddProduct brands={brands} />
                </div>
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[1170px]">
                        <div className="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
                            <div className="col-span-3">
                                <h5 className="font-medium text-white">Name</h5>
                            </div>

                            <div className="col-span-3">
                                <h5 className="font-medium text-white">Position</h5>
                            </div>

                            <div className="col-span-3">
                                <h5 className="font-medium text-white">Email</h5>
                            </div>

                            <div className="col-span-2">
                                <h5 className="font-medium text-white">Role</h5>
                            </div>

                            <div className="col-span-1">
                                <h5 className="text-right font-medium text-white">Options</h5>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-boxdark rounded-b-[10px]">
                            <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                                <div className="col-span-3">
                                    <p className="text-[#637381] dark:text-bodydark">Musharof Chowdhury</p>
                                </div>

                                <div className="col-span-3">
                                    <p className="text-[#637381] dark:text-bodydark">
                                        Multidisciplinary Web Entrepreneur
                                    </p>
                                </div>

                                <div className="col-span-3">
                                    <p className="text-[#637381] dark:text-bodydark">musharof@example.com</p>
                                </div>

                                <div className="col-span-2">
                                    <p className="text-[#637381] dark:text-bodydark">Owner</p>
                                </div>

                                <div className="col-span-1 relative">
                                    <div x-data="{ isOpen: false }">
                                        <button className="float-right inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-black shadow-11 hover:text-primary dark:bg-meta-4 dark:text-white dark:shadow-none">
                                            Action
                                            <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.00039 11.4C7.85039 11.4 7.72539 11.35 7.60039 11.25L1.85039 5.60005C1.62539 5.37505 1.62539 5.02505 1.85039 4.80005C2.07539 4.57505 2.42539 4.57505 2.65039 4.80005L8.00039 10.025L13.3504 4.75005C13.5754 4.52505 13.9254 4.52505 14.1504 4.75005C14.3754 4.97505 14.3754 5.32505 14.1504 5.55005L8.40039 11.2C8.27539 11.325 8.15039 11.4 8.00039 11.4Z" fill=""></path>
                                            </svg>
                                        </button>

                                        <div className=" hidden" >
                                            <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                                                Edit
                                            </button>
                                            <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                                                Delete
                                            </button>
                                            <button className="flex w-full px-4 py-2 text-sm hover:bg-whiter hover:text-primary dark:hover:bg-meta-4">
                                                Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                    <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">Product Name</th>
                                    <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">Price</th>
                                    <th className="px-4 py-4 font-medium text-black dark:text-white">Brand</th>
                                    <th className="px-4 py-4 font-medium text-black dark:text-white">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product: any, index: any) => (
                                    <tr key={product.id}>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.brand.name}</td>
                                        <td className="flex justify-center space-x-1">
                                            <UpdateProduct brands={brands} product={product} />
                                            <DeleteProduct product={product} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </DefaultLayout >
    );
};

export default Product;