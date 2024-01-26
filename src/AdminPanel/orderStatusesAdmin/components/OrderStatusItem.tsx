import {OrderStatus} from '../../../interfaces/admin.data';

interface OrderStatusItemProps{
    orderStatus: OrderStatus;
    setEditingOrderStatus: Function;
    setEditOrderStatusModalIsOpen: Function
    removeOrderStatus: Function;
}

export const OrderStatusItem : React.FC<OrderStatusItemProps> = ({orderStatus, setEditingOrderStatus, setEditOrderStatusModalIsOpen, removeOrderStatus}) => {
    const changeButtonHandler = ()=>{
        setEditingOrderStatus(orderStatus);
        setEditOrderStatusModalIsOpen(true);
    }
    return(
        <tr className="py-2 px-4
            hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]
            transition-shadow duration-300 rounded-lg"
            >
            <td className='px-2'>{orderStatus.id}</td>
            <td className='px-2'>{orderStatus.statusName}</td>
            <td className='px-2'>{orderStatus.statusNameUK}</td>
            <td className='flex justify-end py-2'>
                <button
                    className='w-10 h-10 mr-2 bg-yellow rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
                    onClick={()=> changeButtonHandler()}
                >&#9998;
                </button>
                <button
                    className='w-10 h-10 mr-2 bg-red rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
                    onClick={()=> removeOrderStatus(orderStatus)}
                >&#10060;
                </button>
            </td>
        </tr>
    );
}