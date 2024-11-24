
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
            <div className="mb-2">
                <AddProduct brands={brands} />
            </div>
            <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="max-w-full overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">#</th>
                                <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">Product Name</th>
                                <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">Price</th>
                                <th className="px-4 py-4 font-medium text-black dark:text-white">Brand</th>
                                <th className="px-4 py-4 font-medium text-black dark:text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product: any, index: any) => (
                                <tr key={product.id}>
                                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">{index + 1}</td>
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
        </DefaultLayout>
    );
};

export default Product;