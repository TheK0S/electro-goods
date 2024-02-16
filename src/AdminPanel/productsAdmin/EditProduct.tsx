import { Field, useField, useFormik } from "formik";
import { Category, Country, Manufacturer, Product, ProductAttribute } from "../../interfaces/admin.data";
import React, { useEffect, useState } from "react";
import { AttributesList } from "./components/AttributesList";
import { CreateAttributeModal } from "./components/CreateAttributeModal";
import axios from "axios";
import { apiUrl } from "../../api";
import { Popup, PopupProps } from "../components/Popup";
import { Link, useParams } from "react-router-dom";
import { Select, SelectOption } from "../components/Select";
import { count } from "console";
import { Value } from "sass";


export const EditProduct = () => {
    console.log('edit product mount')
    const [product, setProduct] = useState<Product>({} as Product)
    const [categories, setCategories] = useState<Category[]>([])
    const [countries, setCountries] = useState<Country[]>([])
    const [manufacturers, setManufacturers] = useState<Manufacturer[]>([])
    const [attributes, setAttributes] = useState<ProductAttribute[]>([]);

    const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
    const [selectedCountryId, setSelectedCountryId] = useState<string>('');
    const [selectedManufacturerId, setSelectedManufacturerId] = useState<string>('');

    const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);
    const [popup, setPopup] = useState<PopupProps>({onClose: () => setPopupIsOpen(false)});
    const [createAttributeModalIsOpen, setCreateAttributeModalIsOpen] = useState(false);

    const {id} = useParams<string>();    

    useEffect(() => {
        setAttributes(product.productAttributes ?? [] as ProductAttribute[])
        formicEdit.setValues({
            ...product,
            categoryId: Number(selectedCategoryId),
            countryId: Number(selectedCountryId),
            manufacturerId: Number(selectedManufacturerId),
            productAttributes: attributes
        });
    }, [product]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productResponse, categoriesResponse, countriesResponse, manufacturersResponse] = await Promise.all([
                    axios.get(`${apiUrl}/productsAdmin/${id}`),
                    axios.get(`${apiUrl}/categoriesAdmin`),
                    axios.get(`${apiUrl}/countriesAdmin`),
                    axios.get(`${apiUrl}/manufacturersAdmin`)
                ]);
    
                setProduct(productResponse.data);
                setCategories(categoriesResponse.data);
                setCountries(countriesResponse.data);
                setManufacturers(manufacturersResponse.data);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };
    
        fetchData();
    }, [id]);

    const updateProduct = (product: Product) => {
        (async () => {
          setPopupIsOpen(false);
          try {
            product.category = null;
            product.country = null;
            product.manufacturer = null;
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
            await axios.post(apiUrl + "/productAttributesAdmin", attribute)
            setAttributes(prev => [...prev, attribute])
        } catch (error) {
            console.log(error);
        }
        // try {
        //     const response = await axios.post(apiUrl + "/productattributesadmin", attribute)
        // } catch (error) {
        //     console.log(error);
        // }
        formicEdit.values.productAttributes?.push(attribute);
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
        setAttributes(prev => prev.filter(attribute => id !== attribute.attributeId))
    }

    const handleCategoryIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategoryId(event.target.value);
    };

    const handleCountryIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountryId(event.target.value);
    };

    const handleManufacturerIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedManufacturerId(event.target.value);
    };

    return (

            <div className="container max-w-5xl">
                {popupIsOpen &&
                    <Popup title={popup.title} text={popup.text} onClose={popup.onClose} className={popup.className}/>
                }
                <h3 className="text-center text-lg font-bold">Редактирование продукта</h3>
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
                        checked={formicEdit.values.isActive}
                    />
                        Активен ли продукт:
                    </label>
                    <div className="flex items-center mt-5">
                        <label htmlFor="countryId" className="font-bold mr-3">Категория:</label>
                        <Select
                            name="countryId"
                            options={categories.map(category => ({label: category.name, value: category.name} as SelectOption))}
                        />
                    </div>
                    <div className="flex items-center mt-5">
                        <label htmlFor="countrySelect" className="font-bold mr-3">Страна:</label>
                        <select
                            name="countrySelect"
                            id="countrySelect"
                            className="p-1"
                            value={formicEdit.values.countryId}
                            onChange={formicEdit.handleChange}
                        >
                            {countries &&
                                countries.map(country => (
                                    <option
                                        key={country.id}
                                        value={country.id}
                                    >
                                        {country.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="flex items-center mt-5">
                        <label htmlFor="manufacturerSelect" className="font-bold mr-3">Производитель:</label>
                        <select
                            name="manufacturerSelect"
                            id="manufacturerSelect"
                            className="p-1"
                            value={formicEdit.values.manufacturerId}
                            onChange={formicEdit.handleChange}
                        >
                            {manufacturers &&
                                manufacturers.map(manufacturer => (
                                    <option
                                        key={manufacturer.id}
                                        value={manufacturer.id}
                                    >
                                        {manufacturer.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
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
                    >Сохранить
                    </button>
                    <Link
                        to="/admin/products"
                        className="bg-primary text-modal font-bold py-2 px-4 mx-2 rounded-md"
                    >Отменить
                    </Link>
                </div>
            </form>            
        </div>

    );
}