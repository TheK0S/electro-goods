import {NavLink} from 'react-router-dom';

export const ContentItem = ({...product}) => {   
    return(
        <NavLink 
        // to={`/product/${product.id}`} 
        to={`/product`}
        onClick={()=>{}}
            className="py-2 px-4 bg-modal mt-1 mr-1 cursor-pointer
            hover:bg-secondary hover:text-main
            transition-shadow duration-300 rounded-lg
            lg:bg-opacity-0 lg:mt-0 lg:rounded-none lg:mr-0
            ">
            <div className='px-2'>{product.name}</div>
        </NavLink>
    );
}