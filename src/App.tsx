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
import { AdminPage } from './AdminPanel/AdminPage';
import { ShowFilterContext,ShowBreadCrumbContext, ShowInvitedContentContext } from './servises/showComponentContext';
import { useState } from 'react';

const App = () => {

  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isShowInvitedContent, setIsShowInvitedContent] = useState(false);
  const [isShowBreadCrumb, setIsShowBreadCrumb] = useState(false);

  const showFilter = (isValue:boolean):void =>{
    setIsShowFilter(isValue);
  };

  const showBreadCrumb = (isValue:boolean):void =>{
    setIsShowBreadCrumb(isValue);
  };

  const showInvitedContent = (isValue:boolean):void =>{
    setIsShowInvitedContent(isValue);
  };

  const Root = () => {
    return (
      <div className="container relative h-[100vh] py-3 ">
        <ShowFilterContext.Provider value={{isShowFilter, showFilter}}>
        <ShowBreadCrumbContext.Provider value={{isShowBreadCrumb, showBreadCrumb}}>
        <ShowInvitedContentContext.Provider value={{isShowInvitedContent, showInvitedContent}}>
          <div>
          <Header />
          <Outlet />
          <Footer />
          </div>
        </ShowInvitedContentContext.Provider>
        </ShowBreadCrumbContext.Provider>
        </ShowFilterContext.Provider>
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