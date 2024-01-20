import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Footer } from './components/footer/Footer';
import { NotFound } from './pages/NotFound/NotFound';
import { Header } from './components/header/Header';
import { PersonalArea } from './pages/PersonalArea/PersonalArea';
import './App.scss';
import { AdminPage } from './adminPages/AdminPage/AdminPage';
import { CategoriesAdmin } from "./adminPages/CategoriesAdmin/CategoriesAdmin";
import { UpdateCategoryAdmin } from './adminPages/CategoriesAdmin/UpdateCategoryAdmin';

const App = () => {

  const Root = () => {
    return (
      <div className="container py-3 ">
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
      );
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/admin' element={<AdminPage/>} />
      <Route path='/admin/category' element={<CategoriesAdmin />} />
      <Route path='/admin/category/update/:id/:name/:nameUK' element={<UpdateCategoryAdmin/>} />
      <Route path='/personalarea/:userId' loader={loader} element={<PersonalArea />} errorElement={<NotFound/>} />
      <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  
  return (
     <RouterProvider router={router} />
  ) 
};

function loader(params:any){
  //There will be a database query
  return params;
}

export default App;