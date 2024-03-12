import { useGetDataQuery } from '../../servises/postServise';
import {useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { useShowInvitedContentContext } from "../../servises/showComponentContext";

export const InvitedContent = () => {

    // const { isShowInvitedContent, showInvitedContent } = useShowInvitedContentContext();

    const mainLanguage = useSelector ((state:RootState) => state.languageReducer.languageValue);
   
    const { 
        data: products = [] ,
        isLoading,
        error 
    } = useGetDataQuery({url:`/products?categoryId=1`, lang:mainLanguage});
    
    if (isLoading) return (<div className="p-10 text-xs">...LOADING</div>)   

    if (error) return (<h1 className="p-10">ERROR</h1>)
console.log(products.name)
    return (
        <h1 className="bg-[pink]">{products[0].name}</h1>
    )
}

// const { 
//     data: productsById = [] ,
//     isLoading,
//     error 
// } = useGetDataQuery({url:`/productsAdmin?CategoryId=${category.id}`, lang:mainLanguage});
// console.log(productsById)
// const loadProductById = (id:number) => {
//     console.log(id,category.id, productsById);
    

// }