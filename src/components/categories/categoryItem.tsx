import {Category} from '../../interfaces/admin.data';

export const CategoryItem : React.FC<Category> = ({...category}) => {
    
    return(
        <div className="py-2 px-4
            hover:bg-secondary
            transition-shadow duration-300 rounded-lg">
            <div className='px-2'>{category.name}</div>
        </div>
    );
}