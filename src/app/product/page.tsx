
import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


import prisma from "@/lib/db";

const pageSize = 5;

const getProducts = async () => {
    const res = await prisma.product.findMany({
        skip: pageSize,
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
    let [products, brands] = await Promise.all([getProducts(), getBrands()]);
    return (
        <DefaultLayout>
            <div className="flex flex-col gap-10">
                <div className="mb-2">
                    <AddProduct brands={brands} />
                </div>
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[1170px]">
                        <div className="grid grid-cols-12 rounded-t-[10px] bg-primary px-5 py-4 lg:px-7.5 2xl:px-11">
                            <div className="col-span-4">
                                <h5 className="font-medium text-white">Product Name</h5>
                            </div>
                            <div className="col-span-4">
                                <h5 className="font-medium text-white">Price</h5>
                            </div>
                            <div className="col-span-2">
                                <h5 className="font-medium text-white">Brand</h5>
                            </div>
                            <div className="col-span-2">
                                <h5 className="text-right font-medium text-white">Options</h5>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-boxdark rounded-b-[10px]">
                            <div className="grid grid-cols-12 border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11">
                                {products.map((product: any, index: any) => (
                                    <>
                                        <div key={product.id} className="col-span-4">
                                            <p className="text-[#637381] dark:text-bodydark">{product.title}</p>
                                        </div>
                                        <div className="col-span-4">
                                            <p className="text-[#637381] dark:text-bodydark">
                                                {product.price}
                                            </p>
                                        </div>

                                        <div className="col-span-2 ">
                                            <p className="text-[#637381] dark:text-bodydark">{product.brand.name}</p>
                                        </div>

                                        <div className="col-span-2 flex align-left justify-end">
                                            <UpdateProduct brands={brands} product={product} />
                                            <DeleteProduct product={product} />
                                        </div>
                                    </>
                                ))}
                                <div className="col-span-10">
                                    {products.length === 0 && (
                                        <div className="text-center text-lg font-medium text-gray-600 dark:text-gray-400">No products found.</div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="datatable-top">
                            <div className="datatable-dropdown">
                                <label>
                                    <select className="datatable-selector"><option value="5">5</option><option value="10">10</option><option value="15">15</option><option value="-1">All</option></select> entries per page
                                </label>
                            </div>
                            {/* <div className="datatable-search">
                            <input className="datatable-input" placeholder="Search..." type="search" title="Search within table" aria-controls="dataTableTwo" />
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Product;