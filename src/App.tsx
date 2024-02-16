import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import { NotFound } from './pages/NotFound/NotFound';
import { Header } from './components/Header/Header';
import { PersonalArea } from './pages/PersonalArea/PersonalArea';
import './App.scss';
import { AdminPage } from './AdminPanel/AdminPage';

const App = () => {

  const Root = () => {
    return (
      <div className="container relative h-[100vh] py-3 ">
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
        <Route path='/admin/*' element={<AdminPage/>} />
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