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

const App = () => {

  const Root = () => {
    return (
      <div className="grid-container">
        <div></div>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
        <div></div>
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