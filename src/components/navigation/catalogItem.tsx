import {Category} from '../../interfaces/admin.data';

export const CatalogItem : React.FC<Category> = ({...category}) => {
    
    return(
        <div className="py-2 px-4 bg-modal mt-1 mr-1 cursor-pointer
            hover:bg-secondary hover:text-main
            transition-shadow duration-300 rounded-lg
            lg:bg-opacity-0 lg:mt-0 lg:rounded-none lg:mr-0
            ">
            <div className='px-2'>{category.name}</div>
        </div>
    );
}