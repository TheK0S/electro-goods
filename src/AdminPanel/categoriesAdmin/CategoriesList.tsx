import {CategoryItem} from './componnents/CategoryItem';
import { Category } from '../../interfaces/admin.data';
import { useState, useEffect } from 'react';
import { Link, Routes, Route } from "react-router-dom";
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

  const addCategory = (category: Category) => {
    
    setCategories([...categories, category])
  }

  const updateCategory = (category: Category) => {
    setCategories(prevCategories =>
      prevCategories.map(item =>
        item.id === category.id? {...item, ...category} : item
      ));
  }
    
  const removeCategory = (category: Category) => {
    setCategories(categories.filter(cat => cat.id !== category.id));
  }

  return (
    <>
    <button
      onClick={() => setCreateCategoryModalIsOpen(true)}
    >Добавить категорию</button>
      <CreateCategoryModal createCategory={addCategory} isOpen={createCategoryModalIsOpen} onClose={() => setCreateCategoryModalIsOpen(false)}/>
      <table className='container'>
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
              removeCategory={removeCategory}
              />
            ))
          ) : (
            <tr>
              <td colSpan={3}>Категорий пока нет</td>
            </tr>
          )}
        </tbody>
      </table>      
    </>
    );
}