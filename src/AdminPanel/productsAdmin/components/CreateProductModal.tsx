import { FormikErrors, FormikValues, useFormik } from "formik";
import { ModalWindow } from "../../components/ModalWindow";
import { Product } from "../../../interfaces/admin.data";

interface CreateProductModalProps{
    createProduct: Function;
    isOpen: boolean;
    onClose: Function;
}

export const CreateProductModal:React.FC<CreateProductModalProps> = ({createProduct, isOpen, onClose}) => {
    const formic = useFormik({
        initialValues: {
            ...{} as Product
        },
        validate: values => {
            let errors: FormikErrors<FormikValues> = {};
            if(!values.name) errors.name = 'Поле не может быть пустым';
            if(!values.nameUK) errors.nameUK = 'Поле не может быть пустым';
            if(!values.description) errors.description = 'Поле не может быть пустым';
            if(!values.descriptionUK) errors.descriptionUK = 'Поле не может быть пустым';
            if(!values.imgPath) errors.imgPath = 'Поле не может быть пустым';
            if(!values.price || values.price < 0) errors.nameUK = 'Поле не может быть пустым или отрецательным';
            if(!values.stockQuantity || values.stockQuantity < 0) errors.stockQuantity = 'Поле не может быть пустым или отрецательным';
            if(!values.discount || values.discount < 0) errors.discount = 'Поле не может быть пустым или отрецательным';
            if(!values.categoryId || values.categoryId < 0) errors.discount = 'Поле не может быть пустым или отрецательным';
            if(!values.countryId || values.countryId < 0) errors.countryId = 'Поле не может быть пустым или отрецательным';
            if(!values.manufacturerId || values.manufacturerId < 0) errors.manufacturerId = 'Поле не может быть пустым или отрецательным';

            return errors;
        },
        onSubmit: values => {
            createProduct(values as Product);
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