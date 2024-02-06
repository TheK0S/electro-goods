import { useFormik } from "formik";
import { Country } from "../../../interfaces/admin.data";
import { ModalWindow } from "../../components/ModalWindow";

interface EditCountryModalProps {
    country: Country | null;
    updateCountry: Function;
    isOpen: boolean;
    onClose: Function;
}

export const EditCountryModal: React.FC<EditCountryModalProps> = ({country, updateCountry, isOpen, onClose}) => {
    const formicEdit = useFormik({
        initialValues: {
            name: country?.name ?? '',
            nameUK: country?.nameUK ?? ''
        },
        onSubmit: values =>{
            updateCountry({id: country?.id, name: values.name, nameUK: values.nameUK});
            onClose();
        },
    })
    return (
        <ModalWindow
            isOpen={isOpen}
            onClose={onClose}
        >
            <h3 className="text-center text-lg font-bold">Редактирование страны</h3>
            <form
            onSubmit={formicEdit.handleSubmit}
            className="flex flex-col"
            >
                <label htmlFor="name" className="mt-5">Имя страны на русском</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="rounded-md mb-5 px-1"
                    onChange={formicEdit.handleChange}
                    value={formicEdit.values.name}
                />
                <label htmlFor="name" className="mt-5">Имя страны на украинском</label>
                <input
                    id="nameUK"
                    name="nameUK"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formicEdit.handleChange}
                    value={formicEdit.values.nameUK}
                />
                <div className="flex mt-10 justify-center">
                <button
                    type="submit"
                    className="bg-succes text-modal font-bold py-2 px-4 mx-2 rounded-md"
                >Сохранить
                </button>
                <button
                    type="button"
                    className="bg-primary text-modal font-bold py-2 px-4 mx-2 rounded-md"
                    onClick={() => onClose()}
                >Отменить
                </button>
                </div>

            </form>
        </ModalWindow>
    );
}