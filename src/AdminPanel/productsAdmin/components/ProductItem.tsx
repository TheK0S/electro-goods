import {Product} from '../../../interfaces/admin.data';
import { EditButton } from '../../components/EditButton';
import { EditLink } from '../../components/EditLink';
import { RemoveButton } from '../../components/RemoveButton';

interface ProductItemProps{
    product: Product;
    removeProduct: Function;
}

export const ProductItem : React.FC<ProductItemProps> = ({product, removeProduct}) => {

    return(
        <tr className="py-2 px-4
            hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]
            transition-shadow duration-300 rounded-lg"
            >
            <td className='px-2'>{product.id}</td>
            <td className='px-2'>{product.name}</td>
            <td className='px-2'>{product.nameUK}</td>
            <td className='px-2 text-center'>{product.price}</td>
            <td className='px-2 text-center'>{product.discount}</td>
            <td className='px-2 text-center'>{product.category?.name}</td>
            <td className='flex justify-end py-2'>
                <EditLink to={`/admin/products/edit/${product.id}`} />
                <RemoveButton onClick={()=> removeProduct(product)} />
            </td>
        </tr>
    );
}