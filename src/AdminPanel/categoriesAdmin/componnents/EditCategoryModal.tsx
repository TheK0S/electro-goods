import { useFormik } from "formik";
import { Category } from "../../../interfaces/admin.data";
import { ModalWindow } from "../../components/ModalWindow";

interface EditCategoryModalProps {
    category: Category | null;
    updateCategory: Function;
    removeCategory: Function;
    isOpen: boolean;
    onClose: Function;
}

export const EditCategoryModal: React.FC<EditCategoryModalProps> = ({category, updateCategory, removeCategory, isOpen, onClose}) => {
    const formic = useFormik({
        initialValues: {
            name: category?.name ?? '',
            nameUK: category?.nameUK ??''
        },
        onSubmit: values =>{
            
        },
    })
    return (
        <ModalWindow
            isOpen={isOpen}
            onClose={onClose}
        >
            <h3 className="text-center mb-5 text-lg font-bold">Редактирование категории</h3>
            <form
            onSubmit={formic.handleSubmit}
            className="flex flex-col"
            >
                <label htmlFor="name">Имя категории на русском</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="rounded mb-5 px-1"
                    onChange={formic.handleChange}
                    value={formic.values.name}
                />
                <label htmlFor="name">Имя категории на украинском</label>
                <input
                    id="nameUK"
                    name="nameUK"
                    type="text"
                    className="rounded mb-5 px-1"
                    onChange={formic.handleChange}
                    value={formic.values.nameUK}
                />
                <div className="flex justify-around">
                <button
                    type="submit"
                    className="bg-secondary text-white font-bold py-2 px-4 rounded"
                >Сохранить</button>
                <button
                    type="button"
                    className="bg-secondary text-white font-bold py-2 px-4 rounded"
                    onClick={() => onClose()}
                >Отменить</button>
                </div>

            </form>
        </ModalWindow>
    );
}