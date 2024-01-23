import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { apiUrl } from "../../../api";
import { ModalWindow } from "../../components/ModalWindow";

interface CreateCategoryModalProps{
    createCategory: Function;
    isOpen: boolean;
    onClose: Function;
}

export const CreateCategoryModal:React.FC<CreateCategoryModalProps> = ({createCategory, isOpen, onClose}) => {
    const formic = useFormik({
        initialValues: {
            name: '',
            nameUK: ''
        },
        onSubmit: values =>{
            (async () => {
                try {
                    const response = await axios.post(apiUrl + "/categoriesAdmin", {id: 0, name: values.name, nameUK: values.nameUK});
                    createCategory(response.data);
                } catch (error) {
                    console.error('Ошибка загрузки категорий с сервера:', error);
                }
            })();
            
            createCategory({id: 0, name: values.name, nameUK: values.nameUK});
            values.name = '';
            values.nameUK = '';
        },
    })

    return (
        <ModalWindow isOpen={isOpen} onClose={onClose}>
            <h3 className="text-center mb-5 text-lg font-bold">Создание новой категории</h3>
            <form onSubmit={formic.handleSubmit} className="flex flex-col">
                <label htmlFor="name">Имя категории на русском</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="rounded mb-5 px-1"
                    onChange={formic.handleChange}
                    value={formic.values.name}
                />
                <label htmlFor="name">Имя категории на украинском</label>
                <input
                    id="nameUK"
                    name="nameUK"
                    type="text"
                    className="rounded mb-5 px-1"
                    onChange={formic.handleChange}
                    value={formic.values.nameUK}
                />
                <button
                    type="submit"
                    className="bg-secondary text-white font-bold py-2 px-4 rounded"
                >Добавить категорию</button>
            </form>
        </ModalWindow>
    );
}