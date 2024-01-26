import { useFormik } from "formik";
import { Product } from "../../../interfaces/admin.data";
import { ModalWindow } from "../../components/ModalWindow";

interface EditProductModalProps {
    product: Product | null;
    updateProduct: Function;
    isOpen: boolean;
    onClose: Function;
}

export const EditProductModal: React.FC<EditProductModalProps> = ({product, updateProduct, isOpen, onClose}) => {
    const formicEdit = useFormik({
        initialValues: {
            name: product?.name ?? '',
            nameUK: product?.nameUK ?? '',
            description: product?.description ?? '',
            descriptionUK: product?.descriptionUK ?? '',
            imgPath: product?.imgPath ?? '',
            price: product?.price ?? '',
            stockQuantity: product?.stockQuantity ?? '',
            discount: product?.discount ?? '',
            isActive: product?.isActive ?? false,
            category: product?.category ?? '',
            country: product?.country ?? '',
            manufacturer: product?.manufacturer ?? '',
            productAttributes: product?.productAttributes ?? '',
        },
        onSubmit: values =>{
            updateProduct({
                id: product?.id,
                name: values.name,
                nameUK: values.nameUK,
                description: values.description,
                descriptionUK: values.descriptionUK,
                imgPath: values.imgPath,
                price: values.price,
                stockQuantity: values.stockQuantity,
                discount: values.discount,
                isActive: values.isActive,
            });
            onClose();
        },
    })
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
                />Активен ли продукт:
                </label>
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