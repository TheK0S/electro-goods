import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { CategoriesList } from "./categoriesAdmin/CategoriesList";
import { CountriesList } from "./countriesAdmin/CountriesList";
import { ManufacturersList } from "./manufacrurersAdmin/ManufacturersList";
import { OrdersList } from "./ordersAdmin/OrdersList";
import { ProductsList } from "./productsAdmin/ProductsList";
import { OrderStatusesList } from "./orderStatusesAdmin/OrderStatusesList";
import { EditProduct } from "./productsAdmin/EditProduct";

export const AdminPage = () => {
    console.log('render AdminPage')
    return (
        <section className='flex-col'>
            <h1 className="px-2 py-1 bg-main_02 text-center">Панель администратора Electro-goods</h1>
            <div className="flex flex-wrap">
                <Link to={'/admin/categories'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded-md">Категории</Link>
                <Link to={'/admin/countries'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded-md">Страны</Link>
                <Link to={'/admin/manufacturers'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded-md">Производители</Link>
                <Link to={'/admin/orders'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded-md">Заказы</Link>
                <Link to={'/admin/orderstatuses'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded-md">Статусы заказа</Link>
                <Link to={'/admin/products'} className="bg-secondary text-white font-bold py-2 px-4 mr-2 my-2 rounded-md">Продукты</Link>      
            </div>
            <Routes>
                <Route path="categories/*" element={<CategoriesList/>}/>
                <Route path="countries/*" element={<CountriesList/>}/>
                <Route path="manufacturers/*" element={<ManufacturersList/>}/>
                <Route path="orders/*" element={<OrdersList/>}/>
                <Route path="orderstatuses/*" element={<OrderStatusesList/>}/>
                <Route path="products/edit/:id" element={<EditProduct/>}/>
                <Route path="products/*" element={<ProductsList/>}/>
            </Routes>
        </section>
    );
}