import { ManufacturerItem } from './components/ManufacturerItem';
import { Manufacturer } from '../../interfaces/admin.data';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { CreateManufacturerModal } from './components/CreateManufacturerModal';
import { EditManufacturerModal } from './components/EditManufacturerModal';
import { apiUrl } from '../../api';
import { Popup, PopupProps } from '../components/Popup';

export const ManufacturersList = () => {
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [editingManufacturer, setEditingManufacturer] = useState<Manufacturer | null>(null);
  const [createManufacturerModalIsOpen, setCreateManufacturerModalIsOpen] = useState<boolean>(false);
  const [editManufacturerModalIsOpen, setEditManufacturerModalIsOpen] = useState<boolean>(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popup, setPopup] = useState<PopupProps>({onClose: () => setPopupIsOpen(false)});

  //load manufacturers
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(apiUrl + "/manufacturersAdmin");
        setManufacturers(response.data);
      } catch (error) {
        console.error('Ошибка загрузки производителя с сервера:', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось загрузить производителей',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });
        setPopupIsOpen(true);
      }
    })();
  }, []);

//scroll lock if modal window is open
  useEffect(() => {
    if (createManufacturerModalIsOpen || editManufacturerModalIsOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [createManufacturerModalIsOpen, editManufacturerModalIsOpen]);


  const createManufacturer = (manufacturer: Manufacturer) => {
    (async () => {
      setPopupIsOpen(false);
      try {
        const response = await axios.post(apiUrl + "/manufacturersAdmin", manufacturer);
        setManufacturers([...manufacturers, response.data as Manufacturer]);
        setPopup({
          title: 'Выполнено',
          text: 'Производитель успешно добавлен',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      } catch (error) {
        console.error('Ошибка при добавлении производителя: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось добавить производителя',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });
      }finally{
        setPopupIsOpen(true);
      }
    })();    
  }

  const updateManufacturer = (manufacturer: Manufacturer) => {
    (async () => {
      setPopupIsOpen(false);
      try {
        const response = await axios.put(`${apiUrl}/manufacturersAdmin/${manufacturer.id}`, manufacturer);
        setManufacturers(prevManufacturers =>
          prevManufacturers.map(item =>
            item.id === manufacturer.id? {...item, ...manufacturer} : item
        ));
        setPopup({
          title: 'Выполнено',
          text: 'Производитель успешно изменен',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      } catch (error) {
        console.error('Ошибка при изменении производителя: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось изменить производителя',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });          
      }finally{
        setPopupIsOpen(true);
      }
    })();
  }
    
  const removeManufacturer = (manufacturer: Manufacturer) => {
    (async () => {
      setPopupIsOpen(false);
      try{
        const response = await axios.delete(apiUrl + `/manufacturersAdmin/${manufacturer.id}`);
        setManufacturers(manufacturers.filter(man => man.id !== manufacturer.id));
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
      onClick={() => setCreateManufacturerModalIsOpen(true)}
    >Добавить производителя
    </button>

    {popupIsOpen &&
      <Popup title={popup.title} text={popup.text} onClose={popup.onClose} className={popup.className}/>
    }

    {createManufacturerModalIsOpen&&
      <CreateManufacturerModal
      createManufacturer={createManufacturer}
      isOpen={createManufacturerModalIsOpen}
      onClose={() => setCreateManufacturerModalIsOpen(false)}
    />
    }
    {editManufacturerModalIsOpen&&
      <EditManufacturerModal
      manufacturer={editingManufacturer}
      updateManufacturer={updateManufacturer}
      isOpen={editManufacturerModalIsOpen}
      onClose={() => setEditManufacturerModalIsOpen(false)}
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
          {manufacturers.length ? (
            manufacturers.map((manufacturer: Manufacturer) => (
              <ManufacturerItem
              key={manufacturer.id}
              manufacturer={manufacturer}
              setEditingManufacturer={setEditingManufacturer}
              setEditManufacturerModalIsOpen={setEditManufacturerModalIsOpen}
              removeManufacturer={removeManufacturer}
              />
            ))
          ) : (
            <tr>
              <td className='text-center font-bold' colSpan={3}>Производителей пока нет</td>
            </tr>
          )}
        </tbody>
    </table> 
    </>
  );
}