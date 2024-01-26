import {Product} from '../../../interfaces/admin.data';

interface ProductItemProps{
    product: Product;
    setEditingProduct: Function;
    setEditProductModalIsOpen: Function
    removeProduct: Function;
}

export const ProductItem : React.FC<ProductItemProps> = ({product, setEditingProduct, setEditProductModalIsOpen, removeProduct}) => {
    const changeButtonHandler = ()=>{
        setEditingProduct(product);
        setEditProductModalIsOpen(true);
    }
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
                <button
                    className='w-10 h-10 mr-2 bg-yellow rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
                    onClick={()=> changeButtonHandler()}
                >&#9998;
                </button>
                <button
                    className='w-10 h-10 mr-2 bg-red rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
                    onClick={()=> removeProduct(product)}
                >&#10060;
                </button>
            </td>
        </tr>
    );
}