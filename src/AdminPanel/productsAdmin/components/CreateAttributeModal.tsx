import { FormikErrors, FormikValues, useFormik } from "formik";
import { ProductAttribute } from "../../../interfaces/admin.data"
import { ModalWindow } from "../../components/ModalWindow";

interface CreateAttributeModalProps {
    createAttribut: Function;    
    isOpen: boolean;
    onClose: Function;
}

export const CreateAttributeModal: React.FC<CreateAttributeModalProps> = ({createAttribut, isOpen, onClose}) => {
    const formic = useFormik({
        initialValues: {
            ...{} as ProductAttribute,
            attributeId: 0
        },
        validate: values => {
            let errors: FormikErrors<FormikValues> = {};
            if(!values.attributeName) errors.attributeName = 'Поле не может быть пустым';
            if(!values.attributeValue) errors.attributeValue = 'Поле не может быть пустым';
            if(!values.attributeNameUK) errors.attributeNameUK = 'Поле не может быть пустым';
            if(!values.attributeValueUK) errors.attributeValueUK = 'Поле не может быть пустым';
            return errors;
        },
        onSubmit: values => {
            createAttribut(values as ProductAttribute);
            resetForm();
        },
    })

    const {touched, errors, resetForm} = formic;

    return (
        <ModalWindow isOpen={isOpen} onClose={onClose}>
            <h3 className="text-center text-lg font-bold">Добавление нового продукта</h3>
            <form onSubmit={formic.handleSubmit} className="flex flex-col">
                <label className="mt-5" htmlFor="attributeName">Имя атрибута на русском</label>
                <input
                    id="attributeName"
                    name="attributeName"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.attributeName}
                />
                {touched.attributeName && errors.attributeName ? (<div className="font-bold text-danger">{errors.attributeName}</div>) : null}
                <label className="mt-5" htmlFor="attributeValue">Значение на русском</label>
                <input
                    id="attributeValue"
                    name="attributeValue"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.attributeValue}
                />
                {touched.attributeValue && errors.attributeValue ? (<div className="font-bold text-danger">{errors.attributeValue}</div>) : null}
                <label className="mt-5" htmlFor="attributeNameUK">Имя атрибута на украинском</label>
                <input
                    id="attributeNameUK"
                    name="attributeNameUK"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.attributeNameUK}
                />
                {touched.attributeNameUK && errors.attributeNameUK ? (<div className="font-bold text-danger">{errors.attributeNameUK}</div>) : null}
                <label className="mt-5" htmlFor="attributeValueUK">Значение на украинском</label>
                <input
                    id="attributeValueUK"
                    name="attributeValueUK"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.attributeValueUK}
                />
                {touched.attributeValueUK && errors.attributeValueUK ? (<div className="font-bold text-danger">{errors.attributeValueUK}</div>) : null}
                <button
                    type="submit"
                    className="bg-succes text-modal font-bold mt-10 py-2 px-4 rounded-md"
                >Добавить аттрибут</button>
            </form>
        </ModalWindow>
    );
}