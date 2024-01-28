import { useFormik } from "formik";
import { ProductAttribute } from "../../../interfaces/admin.data"

interface EditAttributesProps {
    attributes: ProductAttribute[];    
}

export const EditAttributes: React.FC<EditAttributesProps> = ({attributes}) => {
    const formik = useFormik({
        initialValues: {
            attributesVal: attributes
        },
        onSubmit: values => {

        }
    })

    return(
        <>
        {attributes.map(attribute => (
            <div key={attribute.attributeId}>
                <input
                    id={attribute.attributeName}
                    name={attribute.attributeName}
                    type="text"
                    className="rounded-md px-1"
                    onChange={formik.handleChange}
                    value={attribute.attributeName}
                />
                <input
                    id={attribute.attributeNameUK}
                    name={attribute.attributeNameUK}
                    type="text"
                    className="rounded-md px-1"
                    onChange={formik.handleChange}
                    value={attribute.attributeNameUK}
                />
                <input
                    id={attribute.attributeValue}
                    name={attribute.attributeValue}
                    type="text"
                    className="rounded-md px-1"
                    onChange={formik.handleChange}
                    value={attribute.attributeValue}
                />
                <input
                    id={attribute.attributeValueUK}
                    name={attribute.attributeValueUK}
                    type="text"
                    className="rounded-md px-1"
                    onChange={formik.handleChange}
                    value={attribute.attributeValueUK}
                />
            </div>
        ))
        }
        <button
            type="button"
            className="bg-succes text-modal font-bold py-2 px-4 mx-2 rounded-md"
        >Добавить аттрибут
        </button>
        </>
    );
}