import { useFormik } from "formik";
import { Category } from "../../../interfaces/admin.data";

interface EditCategoryModalProps {
    category: Category | null;
    updateCategory: Function;
    removeCategory: Function;
}

export const EditCategoryModal: React.FC<EditCategoryModalProps> = ({category, updateCategory, removeCategory}) => {
    const formic = useFormik({
        initialValues: {
            name: '',
            nameUK: ''
        },
        onSubmit: values =>{
            
        },
    })
    return (
        <>
        <h3>Редактирование категории</h3>
        <form onSubmit={formic.handleSubmit}>
            <label htmlFor="name">Имя категории на русском</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formic.handleChange}
                value={formic.values.name}
            />
            <label htmlFor="name">Имя категории на украинском</label>
            <input
                id="nameUK"
                name="nameUK"
                type="text"
                onChange={formic.handleChange}
                value={formic.values.nameUK}
            />
        </form></>
    );
}