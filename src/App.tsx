import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Sidenav } from './components/Navigation/Sidenav';
import { Footer } from './components/Footer/Footer';
import { NotFound } from './pages/NotFound/NotFound';
import User from './interfaces/User'
import { Header } from './components/Header/Header';
import { PersonalArea } from './pages/PersonalArea/PersonalArea';
import './index.css';

const App = () => {

  const Root = () => {
    return (
      <div className="container">
        <Header />
        <Outlet />
        <Footer />
      </div>
      );
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
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