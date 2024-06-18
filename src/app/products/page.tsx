import { useEffect, useState } from "react";

export default async function Page() {
    const fetchSchools = async () => {
        const res = await fetch('api/products');
        const products = await res.json();
        return products;
    }

    const [schools, setSchools] = useState([])

    useEffect(() => {
        fetchSchools().then((schools) => {
            setSchools(schools);
        });

        return () => {
            <>
                <h1>School List</h1>
                {schools.map((school: any) => {
                    <div key={school.id}>
                        <h2>{school.schoolName}</h2>
                        <p>{school.desc}</p>
                    </div>
                })}
            </>
        }
    }, [])

}