"use server";

export default async function Page() {
    const fetchSchools = async () => {
        const res = await fetch('http://localhost:3000/api/products');
        // console.log(res.json());
        console.log(res);
        // const products = res;
        // console.log(products);
        return res;
    }

    const products = await fetchSchools();

    // return () => {
    //     <>
    //         <h1>School List</h1>

    //     </>
    // }

}
