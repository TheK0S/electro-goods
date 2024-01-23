import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { CategoriesList } from "./categoriesAdmin/CategoriesList";
import { CountriesList } from "./countriesAdmin/CountriesList";
import { ManufacturersList } from "./manufacrurersAdmin/ManufacturersList";
import { OrdersList } from "./ordersAdmin/OrdersList";
import { ProductsList } from "./productsAdmin/ProductsList";
import { RolesList } from "./rolesAdmin/RolesList";

export const AdminPage = () => {
    const [countries, setountries] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [orderStatuses, setOrderStatuses] = useState([]);
    const [products, setProducts] = useState([]);
    const [roles, setRoles] = useState([]);


    return (
        <section className='flex-col'>
            <h1 className="px-2 py-1 bg-main_02 text-center">Панель администратора Electro-goods</h1>
            <div className="flex">
                <Link to={'/admin/categories'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Категории</Link>
                <Link to={'/admin/countries'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Страны</Link>
                <Link to={'/admin/manufacturers'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Производители</Link>
                <Link to={'/admin/orders'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Заказы</Link>
                <Link to={'/admin/orderstatuses'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Статусы заказа</Link>
                <Link to={'/admin/products'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Продукты</Link>
                <Link to={'/admin/roles'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded">Роли</Link>                
            </div>
            <Routes>
                <Route path="categories/*" element={<CategoriesList/>}/>
                <Route path="countries/*" element={<CountriesList/>}/>
                <Route path="manufacturers/*" element={<ManufacturersList/>}/>
                <Route path="orderstatuses/*" element={<OrdersList/>}/>
                <Route path="products/*" element={<ProductsList/>}/>
                <Route path="roles/*" element={<RolesList/>}/>
            </Routes>
        </section>
    );
}