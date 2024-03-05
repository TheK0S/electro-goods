import {Category} from '../../interfaces/admin.data';

export const CatalogItem : React.FC<Category> = ({...category}) => {
    
    return(
        <div className="py-2 px-4 bg-modal mt-1 mr-1 cursor-pointer
            hover:bg-secondary hover:text-main
            transition-shadow duration-300 rounded-lg
            md:bg-opacity-0 md:mt-0 md:rounded-none md:mr-0
            ">
            <div className='px-2'>{category.name}</div>
        </div>
    );
}