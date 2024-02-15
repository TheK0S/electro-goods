import { useEffect, useState } from "react"
import { useHttp } from "../../servises/requests";
import { Category } from "../../interfaces/admin.data";

export const Categories = () => {

    const request = useHttp();
  
    async function getCategories  () {
        setCategories(await request ('/countriesAdmin14'));
    }

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
       getCategories();
    }, []);

    console.log(categories)
    return (
        <>
        
        </>
    )
}