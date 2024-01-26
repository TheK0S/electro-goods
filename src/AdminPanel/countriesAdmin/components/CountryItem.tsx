import {Country} from '../../../interfaces/admin.data';

interface CountryItemProps{
    country: Country;
    setEditingCountry: Function;
    setEditCountryModalIsOpen: Function
    removeCountry: Function;
}

export const CountryItem : React.FC<CountryItemProps> = ({country, setEditingCountry, setEditCountryModalIsOpen, removeCountry}) => {
    const changeButtonHandler = ()=>{
        setEditingCountry(country);
        setEditCountryModalIsOpen(true);
    }
    return(
        <tr className="py-2 px-4
            hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]
            transition-shadow duration-300 rounded-lg"
            >
            <td className='px-2'>{country.id}</td>
            <td className='px-2'>{country.name}</td>
            <td className='px-2'>{country.nameUK}</td>
            <td className='flex justify-end py-2'>
                <button
                    className='w-10 h-10 mr-2 bg-yellow rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
                    onClick={()=> changeButtonHandler()}
                >&#9998;
                </button>
                <button
                    className='w-10 h-10 mr-2 bg-red rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
                    onClick={()=> removeCountry(country)}
                >&#10060;
                </button>
            </td>
        </tr>
    );
}