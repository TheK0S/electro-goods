import { CountryItem } from './components/CountryItem';
import { Country } from '../../interfaces/admin.data';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { CreateCountryModal } from './components/CreateCountryModal';
import { EditCountryModal } from './components/EditCountryModal';
import { apiUrl } from '../../api';
import { Popup, PopupProps } from '../components/Popup';

export const CountriesList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [editingCountry, setEditingCountry] = useState<Country | null>(null);
  const [createCountryModalIsOpen, setCreateCountryModalIsOpen] = useState<boolean>(false);
  const [editCountryModalIsOpen, setEditCountryModalIsOpen] = useState<boolean>(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const [popup, setPopup] = useState<PopupProps>({onClose: () => setPopupIsOpen(false)});

  //load countries
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(apiUrl + "/countriesAdmin");
        setCountries(response.data);
      } catch (error) {
        console.error('Ошибка загрузки страны с сервера:', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось загрузить страны',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });
        setPopupIsOpen(true);
      }
    })();
  }, []);

//scroll lock if modal window is open
  useEffect(() => {
    if (createCountryModalIsOpen || editCountryModalIsOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [createCountryModalIsOpen, editCountryModalIsOpen]);


  const createCountry = (country: Country) => {
    (async () => {
      setPopupIsOpen(false);
      try {
        const response = await axios.post(apiUrl + "/countriesAdmin", country);
        setCountries([...countries, response.data as Country]);
        setPopup({
          title: 'Выполнено',
          text: 'Страна успешно добавлена',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      } catch (error) {
        console.error('Ошибка при добавлении страны: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось добавить страну',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });
      }finally{
        setPopupIsOpen(true);
      }
    })();    
  }

  const updateCountry = (country: Country) => {
    (async () => {
      setPopupIsOpen(false);
      try {
        const response = await axios.put(`${apiUrl}/countriesAdmin/${country.id}`, country);
        setCountries(prevCountries =>
          prevCountries.map(item =>
            item.id === country.id? {...item, ...country} : item
        ));
        setPopup({
          title: 'Выполнено',
          text: 'Страна успешно изменена',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      } catch (error) {
        console.error('Ошибка при изменении страны: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось изменить страну',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-danger_light'
        });          
      }finally{
        setPopupIsOpen(true);
      }
    })();
  }
    
  const removeCountry = (country: Country) => {
    (async () => {
      setPopupIsOpen(false);
      try{
        const response = await axios.delete(apiUrl + `/countriesAdmin/${country.id}`);
        setCountries(countries.filter(c => c.id !== country.id));
        setPopup({
          title: 'Выполнено',
          text: 'Страна успешно удалена',
          onClose: () => setPopupIsOpen(false),
          className: 'bg-success_light'
        });
      }catch (error) {
        console.error('Ошибка при удалении страны: ', error);
        setPopup({
          title: 'Ошибка!',
          text: 'Не удалось удалить страну',
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
      onClick={() => setCreateCountryModalIsOpen(true)}
    >Добавить страну
    </button>

    {popupIsOpen &&
      <Popup title={popup.title} text={popup.text} onClose={popup.onClose} className={popup.className}/>
    }

    {createCountryModalIsOpen&&
      <CreateCountryModal
      createCountry={createCountry}
      isOpen={createCountryModalIsOpen}
      onClose={() => setCreateCountryModalIsOpen(false)}
    />
    }
    {editCountryModalIsOpen&&
      <EditCountryModal
      country={editingCountry}
      updateCountry={updateCountry}
      isOpen={editCountryModalIsOpen}
      onClose={() => setEditCountryModalIsOpen(false)}
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
          {countries.length ? (
            countries.map((country: Country) => (
              <CountryItem
              key={country.id}
              country={country}
              setEditingCountry={setEditingCountry}
              setEditCountryModalIsOpen={setEditCountryModalIsOpen}
              removeCountry={removeCountry}
              />
            ))
          ) : (
            <tr>
              <td className='text-center font-bold' colSpan={3}>Стран пока нет</td>
            </tr>
          )}
        </tbody>
    </table> 
    </>
  );
}