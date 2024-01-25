import {CategoryItem} from './componnents/CategoryItem';
import { Category } from '../../interfaces/admin.data';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { CreateCategoryModal } from './componnents/CreateCategoryModal';
import { EditCategoryModal } from './componnents/EditCategoryModal';
import { apiUrl } from '../../api';

export const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [createCategoryModalIsOpen, setCreateCategoryModalIsOpen] = useState<boolean>(false)
  const [editCategoryModalIsOpen, setEditCategoryModalIsOpen] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(apiUrl + "/categoriesAdmin");
        setCategories(response.data);
      } catch (error) {
        console.error('Ошибка загрузки категорий с сервера:', error);
      }
    })();
  }, []);


  useEffect(() => {
    if (createCategoryModalIsOpen || editCategoryModalIsOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [createCategoryModalIsOpen, editCategoryModalIsOpen]);


  const createCategory = (category: Category) => {
    (async () => {
      try {
          const response = await axios.post(apiUrl + "/categoriesAdmin", category);
          setCategories([...categories, response.data as Category]);
      } catch (error) {
          console.error('Ошибка при добавлении категории: ', error);
      }
    })();    
  }

  const updateCategory = (category: Category) => {
    (async () => {
      try {
          const response = await axios.put(`${apiUrl}/categoriesAdmin/${category.id}`, category);
          setCategories(prevCategories =>
            prevCategories.map(item =>
              item.id === category.id? {...item, ...category} : item
          ));
      } catch (error) {
          console.error('Ошибка при изменении категории: ', error);
      }
    })();
  }
    
  const removeCategory = (category: Category) => {
    (async () => {
      try{
        const response = await axios.delete(apiUrl + `/categoriesAdmin/${category.id}`);
        setCategories(categories.filter(cat => cat.id !== category.id));
      }catch (error) {
        console.error('Ошибка при удалении категории: ', error);
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
    <table className='table-auto w-full border-spacing-2'>
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