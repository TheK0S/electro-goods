import { useState } from "react";
import Category from "../../interfaces/Category";
import { useParams } from "react-router-dom";

export const UpdateCategoryAdmin = () => {
    const {id, name, nameUK} = useParams()
    const [name_, setName_] = useState(name);
    const [nameUK_, setNameUK_] = useState(nameUK);
    return(
        <form className="flex flex-col">
            <label htmlFor="name"><b>Имя категории на русском:</b></label>
            <input
            className="mb-3"
            type="text" 
            value={name_}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName_(e.target.value)}
            />
            <label htmlFor="name"><b>Имя категории на украинском:</b></label>
            <input
            className="mb-3"
            type="text" 
            value={nameUK_}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameUK_(e.target.value)}
            />
        </form>
    );
}