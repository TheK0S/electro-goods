import {ProductItem} from './components/ProductItem';
import { Product } from '../../interfaces/admin.data';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { CreateProductModal } from './components/CreateProductModal';
import { apiUrl } from '../../servises/api';
import { Popup, PopupProps } from '../components/Popup';
import { Route, Routes } from 'react-router-dom';
import { EditProduct } from './EditProduct';

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [createProductModalIsOpen, setCreateProductModalIsOpen] = useState<boolean>(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popup, setPopup] = useState<PopupProps>({onClose: () => setPopupIsOpen(false)});

  //load products
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(apiUrl + "/productsAdmin");
        setProducts(response.data);
      } catch (error) {
        console.error('Ошибка загрузки продуктов с сервера:', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось загрузить продукты',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });
        setPopupIsOpen(true);
      }
    })();
  }, []);

  const createProduct = (product: Product) => {
    (async () => {
      setPopupIsOpen(false);
      try {
        const response = await axios.post(apiUrl + "/productsAdmin", product);
        setProducts([...products, response.data as Product]);
        setPopup({
          title: 'Выполнено',
          text: 'Продукт успешно добавлен',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      } catch (error) {
        console.error('Ошибка при добавлении продукта: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось создать продукт',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });
      }finally{
        setPopupIsOpen(true);
      }
    })();    
  }

  const removeProduct = (product: Product) => {
    (async () => {
      setPopupIsOpen(false);
      try{
        const response = await axios.delete(apiUrl + `/productsAdmin/${product.id}`);
        setProducts(products.filter(cat => cat.id !== product.id));
        setPopup({
          title: 'Выполнено',
          text: 'Продукт успешно удален',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      }catch (error) {
        console.error('Ошибка при удалении продукта: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось удалить продукт',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light text-modal'
        });
      }finally{
        setPopupIsOpen(true);
      }
    })();
  }

  return (
    <>
    <button
      className='px-4 py-2 bg-succes rounded-md font-bold text-modal'
      onClick={() => setCreateProductModalIsOpen(true)}
    >Добавить продукт
    </button>

    {popupIsOpen &&
      <Popup title={popup.title} text={popup.text} onClose={popup.onClose} className={popup.className}/>
    }

    {createProductModalIsOpen&&
      <CreateProductModal
      createProduct={createProduct}
      isOpen={createProductModalIsOpen}
      onClose={() => setCreateProductModalIsOpen(false)}
      />
    }
    <table className='table-auto w-full border-spacing-2 mb-5'>
        <thead>
          <tr>
            <th><b>Id</b></th>
            <th><b>Имя на русском</b></th>
            <th><b>Имя на украинском</b></th>
            <th><b>Цена</b></th>
            <th><b>Скидка</b></th>
            <th><b>Категория</b></th>
          </tr>
        </thead>
        <tbody>
          {products.length ? (
            products.map((product: Product) => (
              <ProductItem
              key={product.id}
              product={product}
              removeProduct={removeProduct}
              />
            ))
          ) : (
            <tr>
              <td className='text-center font-bold' colSpan={6}>Продуктов пока нет</td>
            </tr>
          )}
        </tbody>
    </table>
    </>
  );
}