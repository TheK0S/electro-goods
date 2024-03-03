import { Link } from 'react-router-dom';
import { Category } from "../../interfaces/admin.data";
import { CatalogItem } from "./catalogItem";
import { useGetDataQuery } from '../../servises/postServise';
import {useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

export interface CatalogProps {
    isCatalogOpen: boolean;
    showCatalog: Function
}

export const Catalog:React.FC<CatalogProps> = ({isCatalogOpen, showCatalog}) => {

    const mainLanguage = useSelector ((state:RootState) => state.languageReducer.languageValue);
   
    const { 
        data: categories = [] ,
        isLoading,
        error 
    } = useGetDataQuery({url:'/categoriesAdmin', lang:mainLanguage});
    
    if (isLoading) return (<div className="p-10 text-xs">...LOADING</div>)   

    if (error) return (<h1 className="p-10">ERROR</h1>)

    return (
        <nav className={`catalogNav-wrap absolute left-80 top-10 bg-main 
                        text-modal hover:text-secondary text-base
                        ${isCatalogOpen?'block':'hidden'} 
                        md:block md:relative md:left-0 md:top-0 md:w-full`}>
            <button className='bg-secondary md:hidden' onClick={()=>{showCatalog(false)}}>close</button>
             <div>{(categories) 
            ? 
                categories.map((category: Category) => (
                <CatalogItem 
                    key={category.id}
                    {...category} /> 
                    )) 
            :
                <div className='text-center font-bold'> данных пока нет</div>}   
            </div>
        </nav> 
    )    
}