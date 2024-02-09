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
                <label className="mt-5" htmlFor="name">Имя на русском</label>
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
                <label className="mt-5" htmlFor="name">Имя на украинском</label>
                <input
                    id="nameUK"
                    name="nameUK"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.nameUK}
                />
                <label className="mt-5" htmlFor="description">Описание на русском</label>
                {touched.nameUK && errors.nameUK ? (<div className="font-bold text-danger">{errors.nameUK}</div>) : null}
                <input
                    id="description"
                    name="description"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.description}
                />
                {touched.description && errors.description ? (<div className="font-bold text-danger">{errors.description}</div>) : null}
                <label className="mt-5" htmlFor="descriptionUK">Описание на украинском</label>
                <input
                    id="descriptionUK"
                    name="descriptionUK"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.descriptionUK}
                />
                {touched.descriptionUK && errors.descriptionUK ? (<div className="font-bold text-danger">{errors.descriptionUK}</div>) : null}
                <label className="mt-5" htmlFor="imgPath">Url адресс картинки</label>
                <input
                    id="imgPath"
                    name="imgPath"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.imgPath}
                />
                {touched.imgPath && errors.imgPath ? (<div className="font-bold text-danger">{errors.imgPath}</div>) : null}
                <label className="mt-5" htmlFor="price">Цена</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.price}
                />
                {touched.price && errors.price ? (<div className="font-bold text-danger">{errors.price}</div>) : null}
                <label className="mt-5" htmlFor="stockQuantity">Количество на складе</label>
                <input
                    id="stockQuantity"
                    name="stockQuantity"
                    type="number"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.stockQuantity}
                />
                {touched.stockQuantity && errors.stockQuantity ? (<div className="font-bold text-danger">{errors.stockQuantity}</div>) : null}
                <label className="mt-5" htmlFor="discount">Процент скидки</label>
                <input
                    id="discount"
                    name="discount"
                    type="number"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.discount}
                />
                {touched.discount && errors.discount ? (<div className="font-bold text-danger">{errors.discount}</div>) : null}
                <label className="mt-5" htmlFor="categoryId">Категория</label>
                <input
                    id="categoryId"
                    name="categoryId"
                    type="number"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.categoryId}
                />
                {touched.categoryId && errors.categoryId ? (<div className="font-bold text-danger">{errors.categoryId}</div>) : null}
                <label className="mt-5" htmlFor="countryId">Страна производитель</label>
                <input
                    id="countryId"
                    name="countryId"
                    type="number"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.countryId}
                />
                {touched.countryId && errors.countryId ? (<div className="font-bold text-danger">{errors.countryId}</div>) : null}
                <label className="mt-5" htmlFor="manufacturerId">Производитель</label>
                <input
                    id="manufacturerId"
                    name="manufacturerId"
                    type="number"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.manufacturerId}
                />
                {touched.manufacturerId && errors.manufacturerId ? (<div className="font-bold text-danger">{errors.manufacturerId}</div>) : null}
                <button
                    type="submit"
                    className="bg-succes text-modal font-bold mt-10 py-2 px-4 rounded-md"
                >Добавить продукт</button>
            </form>
        </ModalWindow>
    );
}