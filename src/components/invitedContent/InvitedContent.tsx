import { useGetDataQuery } from '../../servises/postServise';
import {useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { useShowInvitedContentContext } from "../../servises/showComponentContext";
import { Product } from "../../interfaces/admin.data";
import { ContentItem } from './contentItem';

export const InvitedContent = () => {

    const mainLanguage = useSelector ((state:RootState) => state.languageReducer.languageValue);
   
    const { 
        data: products = [] ,
        isLoading,
        error 
    } = useGetDataQuery({url:`/products?categoryId=1`, lang:mainLanguage});
    
    if (isLoading) return (<div className="p-10 text-xs">...LOADING</div>)   

    if (error) return (<h1 className="p-10">ERROR</h1>)
console.log(products)
    return (
        <>
       <h1>назва категории</h1>
       {(products) 
            ? 
                products.map((product: Product) => (
                <ContentItem 
                    key={product.id}
                    {...product} /> 
                    )) 
            :
                <div className='text-center font-bold'> данных пока нет</div>}   
        </>
        
    )
}
