import { useFormik } from "formik";
import { Product, ProductAttribute } from "../../../interfaces/admin.data";
import { ModalWindow } from "../../components/ModalWindow";
import { useState } from "react";
import { AttributesList } from "./AttributesList";

interface EditProductModalProps {
    product: Product | null;
    updateProduct: Function;
    isOpen: boolean;
    onClose: Function;
}

export const EditProductModal: React.FC<EditProductModalProps> = ({product, updateProduct, isOpen, onClose}) => {

    const [attributes, setAttributes] = useState<ProductAttribute[]>(product?.productAttributes ?? []);

    const formicEdit = useFormik({
        initialValues: {
            id: product?.id ?? 0,
            name: product?.name ?? '',
            nameUK: product?.nameUK ?? '',
            description: product?.description ?? '',
            descriptionUK: product?.descriptionUK ?? '',
            imgPath: product?.imgPath ?? '',
            price: product?.price ?? '',
            stockQuantity: product?.stockQuantity ?? '',
            discount: product?.discount ?? '',
            isActive: product?.isActive ?? false,
            categoryId: product?.categoryId ?? '',
            category: product?.category ?? {},
            countryId: product?.countryId ?? '',
            country: product?.country ?? {},
            manufacturerId: product?.manufacturerId ?? '',
            manufacturer: product?.manufacturer ?? {},
            productAttributes: attributes,
        },
        onSubmit: values =>{
            updateProduct(values as Product);
            onClose();
        },
    })

    const addAttributeFields = () => {
        const emptyProductAttribut: ProductAttribute = {
            attributeId: 0,
            productId: product?.id ?? 0,
            attributeName: '',
            attributeNameUK: '',
            attributeValue: '',
            attributeValueUK: ''
        }
        setAttributes(prevAttributes => [...prevAttributes, emptyProductAttribut])
        formicEdit.values.productAttributes.push(emptyProductAttribut)
    }

    return (
        <ModalWindow
            isOpen={isOpen}
            onClose={onClose}
        >
            <h3 className="text-center text-lg font-bold">Редактирование категории</h3>
            <form
            onSubmit={formicEdit.handleSubmit}
            className="flex flex-col"
            >
                <label htmlFor="name" className="font-bold mt-5">Имя на русском:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formicEdit.handleChange}
                    value={formicEdit.values.name}
                />
                <label htmlFor="nameUK" className="font-bold mt-5">Имя на украинском:</label>
                <input
                    id="nameUK"
                    name="nameUK"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formicEdit.handleChange}
                    value={formicEdit.values.nameUK}
                />
                <label htmlFor="description" className="font-bold mt-5">Описание на русском:</label>
                <input
                    id="description"
                    name="description"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formicEdit.handleChange}
                    value={formicEdit.values.description}
                />
                <label htmlFor="descriptionUK" className="font-bold mt-5">Описание на украинском:</label>
                <input
                    id="descriptionUK"
                    name="descriptionUK"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formicEdit.handleChange}
                    value={formicEdit.values.descriptionUK}
                />
                <label htmlFor="imgPath" className="font-bold mt-5">Путь Url к картинке:</label>
                <input
                    id="imgPath"
                    name="imgPath"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formicEdit.handleChange}
                    value={formicEdit.values.imgPath}
                />
                <label htmlFor="price" className="font-bold mt-5">Цена:</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    className="rounded-md px-1"
                    onChange={formicEdit.handleChange}
                    value={formicEdit.values.price}
                />
                <label htmlFor="stockQuantity" className="font-bold mt-5">Количество на складе:</label>
                <input
                    id="stockQuantity"
                    name="stockQuantity"
                    type="number"
                    className="rounded-md px-1"
                    onChange={formicEdit.handleChange}
                    value={formicEdit.values.stockQuantity}
                />
                <label htmlFor="discount" className="font-bold mt-5">Общий процент скидки:</label>
                <input
                    id="discount"
                    name="discount"
                    type="number"
                    className="rounded-md px-1"
                    onChange={formicEdit.handleChange}
                    value={formicEdit.values.discount}
                />
                <label className="font-bold mt-5 flex align-middle cursor-pointer">
                <input
                    id="isActive"
                    name="isActive"
                    type="checkbox"
                    className="mx-1"
                    onChange={formicEdit.handleChange}
                />
                    Активен ли продукт:
                </label>
                {formicEdit.values.productAttributes.map((attribute, index) => (
                    // <ul className="flex flex-col px-10">
                    //     <li key={attribute.attributeId} className="flex flex-col mt-5">
                    //         <p className="text-center">Атрибут №{index + 1}</p>
                    //         <label htmlFor={attribute.attributeName} className="font-bold mt-5">Имя атрибута на русском</label>
                    //         <input
                    //             id={attribute.attributeName}
                    //             name={attribute.attributeName}
                    //             type="text"
                    //             className="rounded-md px-1"
                    //             onChange={formicEdit.handleChange}
                    //             value={attribute.attributeName}
                    //         />
                    //         <label htmlFor={attribute.attributeValue} className="font-bold mt-5">Значение атрибута на русском</label>
                    //         <input
                    //             id={attribute.attributeValue}
                    //             name={attribute.attributeValue}
                    //             type="text"
                    //             className="rounded-md px-1"
                    //             onChange={formicEdit.handleChange}
                    //             value={attribute.attributeValue}
                    //         />
                    //         <label htmlFor={attribute.attributeNameUK} className="font-bold mt-5">Имя атрибута на украинском</label>
                    //         <input
                    //             id={attribute.attributeNameUK}
                    //             name={attribute.attributeNameUK}
                    //             type="text"
                    //             className="rounded-md px-1"
                    //             onChange={formicEdit.handleChange}
                    //             value={attribute.attributeNameUK}
                    //         />                        
                    //         <label htmlFor={attribute.attributeValueUK} className="font-bold mt-5">Значение атрибута на украинском</label>
                    //         <input
                    //             id={attribute.attributeValueUK}
                    //             name={attribute.attributeValueUK}
                    //             type="text"
                    //             className="rounded-md px-1"
                    //             onChange={formicEdit.handleChange}
                    //             value={attribute.attributeValueUK}
                    //         />
                    //     </li>
                    // </ul>
                    <AttributesList attributes={formicEdit.values.productAttributes}/>
                ))
                }
                <button
                    type="button"
                    className="bg-succes text-modal font-bold mt-5 py-2 px-4 rounded-md"
                    onClick={()=> addAttributeFields()}
                >
                    Добавить к продукту новый аттрибут
                </button>
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
//     description: string;
//     descriptionUK: string;
//     imgPath: string;
//     price: number;
//     stockQuantity: number;
//     discount: number;
//     isActive: boolean;
//     categoryId: number;
//     countryId: number;
//     manufacturerId: number;
//     category: Category | null;
//     country: Country | null;
//     manufacturer: Manufacturer | null;
//     productAttributes: ProductAttribute[] | null;