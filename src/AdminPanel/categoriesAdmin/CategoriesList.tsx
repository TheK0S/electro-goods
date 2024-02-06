import {CategoryItem} from './components/CategoryItem';
import { Category } from '../../interfaces/admin.data';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { CreateCategoryModal } from './components/CreateCategoryModal';
import { EditCategoryModal } from './components/EditCategoryModal';
import { apiUrl } from '../../api';
import { Popup, PopupProps } from '../components/Popup';

export const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [createCategoryModalIsOpen, setCreateCategoryModalIsOpen] = useState<boolean>(false);
  const [editCategoryModalIsOpen, setEditCategoryModalIsOpen] = useState<boolean>(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popup, setPopup] = useState<PopupProps>({onClose: () => setPopupIsOpen(false)});

  //load categories
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(apiUrl + "/categoriesAdmin");
        setCategories(response.data);
      } catch (error) {
        console.error('Ошибка загрузки категорий с сервера:', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось загрузить категории',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });
        setPopupIsOpen(true);
      }
    })();
  }, []);

//scroll lock if modal window is open
  useEffect(() => {
    if (createCategoryModalIsOpen || editCategoryModalIsOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [createCategoryModalIsOpen, editCategoryModalIsOpen]);


  const createCategory = (category: Category) => {
    (async () => {
      setPopupIsOpen(false);
      try {
        const response = await axios.post(apiUrl + "/categoriesAdmin", category);
        setCategories([...categories, response.data as Category]);
        setPopup({
          title: 'Выполнено',
          text: 'Категория успешно создана',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      } catch (error) {
        console.error('Ошибка при добавлении категории: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось создать категорию',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });
      }finally{
        setPopupIsOpen(true);
      }
    })();
  }

  const updateCategory = (category: Category) => {
    (async () => {
      setPopupIsOpen(false);
      try {
        const response = await axios.put(`${apiUrl}/categoriesAdmin/${category.id}`, category);
        setCategories(prevCategories =>
          prevCategories.map(item =>
            item.id === category.id? {...item, ...category} : item
        ));
        setPopup({
          title: 'Выполнено',
          text: 'Категория успешно изменена',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      } catch (error) {
        console.error('Ошибка при изменении категории: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось изменить категорию',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });          
      }finally{
        setPopupIsOpen(true);
      }
    })();
  }
    
  const removeCategory = (category: Category) => {
    (async () => {
      setPopupIsOpen(false);
      try{
        const response = await axios.delete(apiUrl + `/categoriesAdmin/${category.id}`);
        setCategories(categories.filter(cat => cat.id !== category.id));
        setPopup({
          title: 'Выполнено',
          text: 'Категория успешно удалена',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      }catch (error) {
        console.error('Ошибка при удалении категории: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось удалить категорию',
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
      onClick={() => setCreateCategoryModalIsOpen(true)}
    >Добавить категорию
    </button>

    {popupIsOpen &&
      <Popup title={popup.title} text={popup.text} onClose={popup.onClose} className={popup.className}/>
    }

    {createCategoryModalIsOpen&&
      <CreateCategoryModal
      createCategory={createCategory}
      isOpen={createCategoryModalIsOpen}
      onClose={() => setCreateCategoryModalIsOpen(false)}
      />
    }
    {editCategoryModalIsOpen&&
      <EditCategoryModal
      category={editingCategory}
      updateCategory={updateCategory}
      isOpen={editCategoryModalIsOpen}
      onClose={() => setEditCategoryModalIsOpen(false)}
      />
    }
    <table className='table-auto w-full border-spacing-2 mb-5'>
        <thead>
          <tr>
          <th><b>Id</b></th>
          <th><b>Имя на русском</b></th>
          <th><b>Имя на украинском</b></th>
          </tr>
        </thead>
        <tbody>
          {categories.length ? (
            categories.map((category: Category) => (
              <CategoryItem
              key={category.id}
              category={category}
              setEditingCategory={setEditingCategory}
              setEditCategoryModalIsOpen={setEditCategoryModalIsOpen}
              removeCategory={removeCategory}
              />
            ))
          ) : (
            <tr>
              <td className='text-center font-bold' colSpan={3}>Категорий пока нет</td>
            </tr>
          )}
        </tbody>
    </table> 
    </>
  );
}