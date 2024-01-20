import {CategoryItemAdmin} from './CategoryItemAdmin';
import Category from '../../interfaces/Category';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const CategoriesAdmin = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://localhost:7035/api/categoriesAdmin");
            setCategories(response.data);
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
        };
    
        fetchData();
      }, []);

    const removeCategory = (category: Category) => {
        setCategories(categories.filter(cat => cat.id !== category.id));
    }
    return (
        <table>
            <thead>
                <th><b>Id</b></th>
                <th><b>Имя на русском</b></th>
                <th><b>Имя на украинском</b></th>
            </thead>
            {categories.map((category: Category) => (
                <CategoryItemAdmin key={category.id} category={category} removeCategory={removeCategory}/>
            ))}
        </table>
    );
}