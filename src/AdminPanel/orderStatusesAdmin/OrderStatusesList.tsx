import { OrderStatusItem } from './components/OrderStatusItem';
import { OrderStatus } from '../../interfaces/admin.data';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { CreateOrderStatusModal } from './components/CreateOrderStatusModal';
import { EditOrderStatusModal } from './components/EditOrderStatusModal';
import { apiUrl } from '../../api';
import { Popup, PopupProps } from '../components/Popup';

export const OrderStatusesList = () => {
  const [orderStatuses, setOrderStatuses] = useState<OrderStatus[]>([]);
  const [editingOrderStatus, setEditingOrderStatus] = useState<OrderStatus | null>(null);
  const [createOrderStatusModalIsOpen, setCreateOrderStatusModalIsOpen] = useState<boolean>(false);
  const [editOrderStatusModalIsOpen, setEditOrderStatusModalIsOpen] = useState<boolean>(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popup, setPopup] = useState<PopupProps>({onClose: () => setPopupIsOpen(false)});

  //load orderStatuses
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(apiUrl + "/orderStatusesAdmin");
        setOrderStatuses(response.data);
      } catch (error) {
        console.error('Ошибка загрузки статусов с сервера:', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось загрузить статусы заказа',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });
        setPopupIsOpen(true);
      }
    })();
  }, []);

//scroll lock if modal window is open
  useEffect(() => {
    if (createOrderStatusModalIsOpen || editOrderStatusModalIsOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [createOrderStatusModalIsOpen, editOrderStatusModalIsOpen]);


  const createOrderStatus = (orderStatus: OrderStatus) => {
    (async () => {
      setPopupIsOpen(false);
      try {
        const response = await axios.post(apiUrl + "/orderStatusesAdmin", orderStatus);
        setOrderStatuses([...orderStatuses, response.data as OrderStatus]);
        setPopup({
          title: 'Выполнено',
          text: 'Статус заказа успешно добавлен',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      } catch (error) {
        console.error('Ошибка при добавлении статуса заказа: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось добавить статус заказа',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });
      }finally{
        setPopupIsOpen(true);
      }
    })();    
  }

  const updateOrderStatus = (orderStatus: OrderStatus) => {
    (async () => {
      setPopupIsOpen(false);
      try {
        const response = await axios.put(`${apiUrl}/orderStatusesAdmin/${orderStatus.id}`, orderStatus);
        setOrderStatuses(prevOrderStatuses =>
          prevOrderStatuses.map(item =>
            item.id === orderStatus.id? {...item, ...orderStatus} : item
        ));
        setPopup({
          title: 'Выполнено',
          text: 'Статус заказа успешно изменен',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      } catch (error) {
        console.error('Ошибка при изменении статуса заказа: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось изменить статус заказа',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });          
      }finally{
        setPopupIsOpen(true);
      }
    })();
  }
    
  const removeOrderStatus = (orderStatus: OrderStatus) => {
    (async () => {
      setPopupIsOpen(false);
      try{
        const response = await axios.delete(apiUrl + `/orderStatusesAdmin/${orderStatus.id}`);
        setOrderStatuses(orderStatuses.filter(os => os.id !== orderStatus.id));
        setPopup({
          title: 'Выполнено',
          text: 'Производитель успешно удален',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      }catch (error) {
        console.error('Ошибка при удалении производителя: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось удалить производителя',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light text-modal'
        });
      }finally{
        setPopupIsOpen(true);
      }
    })();
  }

  return (
    <>
    <button
      className='px-4 py-2 bg-succes rounded-md font-bold text-modal'
      onClick={() => setCreateOrderStatusModalIsOpen(true)}
    >Добавить статус заказа
    </button>

    {popupIsOpen &&
      <Popup title={popup.title} text={popup.text} onClose={popup.onClose} className={popup.className}/>
    }

    {createOrderStatusModalIsOpen&&
      <CreateOrderStatusModal
      createOrderStatus={createOrderStatus}
      isOpen={createOrderStatusModalIsOpen}
      onClose={() => setCreateOrderStatusModalIsOpen(false)}
    />
    }
    {editOrderStatusModalIsOpen&&
      <EditOrderStatusModal
      orderStatus={editingOrderStatus}
      updateOrderStatus={updateOrderStatus}
      isOpen={editOrderStatusModalIsOpen}
      onClose={() => setEditOrderStatusModalIsOpen(false)}
  />
    }
    <table className='table-auto w-full border-spacing-2 mb-5'>
        <thead>
          <tr>
          <th><b>Id</b></th>
          <th><b>Имя на русском</b></th>
          <th><b>Имя на украинском</b></th>
          </tr>
        </thead>
        <tbody>
          {orderStatuses.length ? (
            orderStatuses.map((orderStatus: OrderStatus) => (
              <OrderStatusItem
              key={orderStatus.id}
              orderStatus={orderStatus}
              setEditingOrderStatus={setEditingOrderStatus}
              setEditOrderStatusModalIsOpen={setEditOrderStatusModalIsOpen}
              removeOrderStatus={removeOrderStatus}
              />
            ))
          ) : (
            <tr>
              <td className='text-center font-bold' colSpan={3}>Статусов заказа пока нет</td>
            </tr>
          )}
        </tbody>
    </table> 
    </>
  );
}