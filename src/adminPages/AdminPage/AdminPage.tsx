import { useState } from "react";
import { Link } from "react-router-dom";

export const AdminPage = () => {
    const [countries, setountries] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [orderStatuses, setOrderStatuses] = useState([]);
    const [products, setProducts] = useState([]);
    const [roles, setRoles] = useState([]);


    return (
        <section className='admin-page'>
            <h1 className="px-2 py-1 bg-main_02 text-center">Панель администратора Electro-goods</h1>
            <div>
                <Link to={'/admin/category'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Категории</Link>
                <button className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Страны</button>
                <button className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Производители</button>
                <button className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Заказы</button>
                <button className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Статусы заказа</button>
                <button className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Продукты</button>
                <button className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Роли</button>
            </div>
        </section>
    );
}