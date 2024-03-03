import {Category} from '../../interfaces/admin.data';

export const CatalogItem : React.FC<Category> = ({...category}) => {
    
    return(
        <div className="py-2 px-4
            hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]
            transition-shadow duration-300 rounded-lg">
            <div className='px-2'>{category.name}</div>
        </div>
    );
}