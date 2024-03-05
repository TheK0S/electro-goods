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
        <nav className={`catalogNav-wrap absolute  bg-[white]
                        text-base w-full h-full top-0 z-30
                        ${isCatalogOpen?'block':'hidden'} 
                        lg:block md:relative lg:left-0 lg:top-0 
                        lg:bg-main lg:text-modal `}>
            <button className='w-full rounded-full lg:hidden ml-auto mr-0' onClick={()=>{showCatalog(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(44, 68, 86, 0.9)" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ff8d35" className="block w-10 h-10 ml-auto mr-3 mt-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
             <div className='caregoriesList flex flex-col
                             lg:flex-row lg:justify-between
                            '>{(categories) 
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