import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/Home/Home';
import { Sidenav } from './components/Navigation/Sidenav';
import { Footer } from './components/Footer/Footer';
import { NotFound } from './pages/NotFound/NotFound';
import reportWebVitals from './reportWebVitals';
import User from './interfaces/User'

import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { PersonalArea } from './pages/PersonalArea/PersonalArea';

const Root = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
    );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/personalarea/:userId' loader={loader} element={<PersonalArea />} errorElement={<NotFound/>} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function loader(params:any){
  //There will be a database query
  return params;
}