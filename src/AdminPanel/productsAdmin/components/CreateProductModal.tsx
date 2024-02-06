import { FormikErrors, FormikValues, useFormik } from "formik";
import { ModalWindow } from "../../components/ModalWindow";

interface CreateProductModalProps{
    createProduct: Function;
    isOpen: boolean;
    onClose: Function;
}

export const CreateProductModal:React.FC<CreateProductModalProps> = ({createProduct, isOpen, onClose}) => {
    const formic = useFormik({
        initialValues: {
            name: '',
            nameUK: ''
        },
        validate: values => {
            let errors: FormikErrors<FormikValues> = {};
            if(!values.name){
                errors.name = 'Поле не может быть пустым'
            }else if(values.name.length < 3){
                errors.name = 'Поле должно иметь 3 и более символов'
            }

            if(!values.nameUK){
                errors.nameUK = 'Поле не может быть пустым'
            }else if(values.nameUK.length < 3){
                errors.nameUK = 'Поле должно иметь 3 и более символов'
            }

            return errors;
        },
        onSubmit: values => {
            createProduct({id: 0, name: values.name, nameUK: values.nameUK});
            resetForm();
        },
    })

    const {touched, errors, resetForm} = formic;

    return (
        <ModalWindow isOpen={isOpen} onClose={onClose}>
            <h3 className="text-center text-lg font-bold">Добавление нового продукта</h3>
            <form onSubmit={formic.handleSubmit} className="flex flex-col">
                <label className="mt-5" htmlFor="name">Имя продукта на русском</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.name}
                />
                {touched.name && errors.name ? (<div className="font-bold text-danger">{errors.name}</div>) : null}
                <label className="mt-5" htmlFor="name">Имя продукта на украинском</label>
                <input
                    id="nameUK"
                    name="nameUK"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.nameUK}
                />
                {touched.nameUK && errors.nameUK ? (<div className="font-bold text-danger">{errors.nameUK}</div>) : null}
                <button
                    type="submit"
                    className="bg-succes text-modal font-bold mt-10 py-2 px-4 rounded-md"
                >Добавить продукт</button>
            </form>
        </ModalWindow>
    );
}