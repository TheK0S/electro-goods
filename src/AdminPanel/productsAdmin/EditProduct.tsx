import { useFormik } from "formik";
import { Product, ProductAttribute } from "../../interfaces/admin.data";
import { useEffect, useState } from "react";
import { AttributesList } from "./components/AttributesList";
import { CreateAttributeModal } from "./components/CreateAttributeModal";
import axios from "axios";
import { apiUrl } from "../../api";
import { PopupProps } from "../components/Popup";
import { Link, useParams } from "react-router-dom";


export const EditProduct = () => {
    console.log('edit product mount')
    const [product, setProduct] = useState<Product>({} as Product)
    //const [attributes, setAttributes] = useState<ProductAttribute[]>(product?.productAttributes ?? []);
    const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);
    const [popup, setPopup] = useState<PopupProps>({onClose: () => setPopupIsOpen(false)});
    const [createAttributeModalIsOpen, setCreateAttributeModalIsOpen] = useState(false);
    const {id} = useParams<string>();

    useEffect(() => {
        const getProduct = async (productId: number) => {
            const response = await axios.get(`${apiUrl}/productsAdmin/${productId}`);
            setProduct(response.data);
        }
        getProduct(Number(id));
    }, [])

    useEffect(() => {
        formicEdit.setValues({
            ...product
        });
    }, [product]);

    const updateProduct = (product: Product) => {
        (async () => {
          setPopupIsOpen(false);
          try {
            console.log(product);
            const response = await axios.put(`${apiUrl}/productsAdmin/${product.id}`, product);
            setPopup({
              title: 'Выполнено',
              text: 'Продукт успешно изменен',
              onClose: () => setPopupIsOpen(false),
              className: 'bg-success_light'
            });
          } catch (error) {
            console.error('Ошибка при изменении продукта: ', error);
            setPopup({
              title: 'Ошибка!',
              text: 'Не удалось изменить продукт',
              onClose: () => setPopupIsOpen(false),
              className: 'bg-danger_light'
            });          
          }finally{
            setPopupIsOpen(true);
          }
        })();
      }

    const createAttribute = async (attribute: ProductAttribute) => {
        try {
            //const response = await axios.post(apiUrl + "/productAttributesAdmin", attribute)
            formicEdit.values.productAttributes?.push(attribute)
            console.log('attribute added')
        } catch (error) {
            console.log(error);
        }
    }

    const formicEdit = useFormik({
        initialValues: {
            ...{} as Product
        },
        onSubmit: values =>{
            updateProduct(values as Product);
        },
    })

    const handlerEditAttributClick = (id: number) => {
        
    }

    const handlerRemoveAttributClick = (id: number) => {
        //setAttributes(prev => prev.filter(attribute => id !== attribute.attributeId))
    }

    return (
        <>
            <h3 className="text-center text-lg font-bold">Редактирование категории</h3>
            <CreateAttributeModal
                createAttribut={createAttribute}
                isOpen={createAttributeModalIsOpen}
                onClose={() => setCreateAttributeModalIsOpen(false)}
            />
            
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
                <button
                    type="button"
                    className="bg-succes text-modal font-bold mt-5 py-2 px-4 rounded-md"
                    onClick={()=> setCreateAttributeModalIsOpen(true)}
                >
                    Добавить к продукту новый аттрибут
                </button>
                {formicEdit.values.productAttributes &&
                    <AttributesList
                        attributes={formicEdit.values.productAttributes}
                        handlerEditClick={handlerEditAttributClick}
                        handlerRemoveClick={handlerRemoveAttributClick}
                    />
                }
                <div className="flex mt-10 justify-center">
                    <button
                        type="submit"
                        className="bg-succes text-modal font-bold py-2 px-4 mx-2 rounded-md"
                    >
                        Сохранить
                    </button>
                    <Link
                        to="/admin/products"
                        className="bg-primary text-modal font-bold py-2 px-4 mx-2 rounded-md"
                    >
                        Отменить
                    </Link>
                </div>
            </form>            
        </>
    );
}