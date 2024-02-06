import {Manufacturer} from '../../../interfaces/admin.data';

interface ManufacturerItemProps{
    manufacturer: Manufacturer;
    setEditingManufacturer: Function;
    setEditManufacturerModalIsOpen: Function
    removeManufacturer: Function;
}

export const ManufacturerItem : React.FC<ManufacturerItemProps> = ({manufacturer, setEditingManufacturer, setEditManufacturerModalIsOpen, removeManufacturer}) => {
    const changeButtonHandler = ()=>{
        setEditingManufacturer(manufacturer);
        setEditManufacturerModalIsOpen(true);
    }
    return(
        <tr className="py-2 px-4
            hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]
            transition-shadow duration-300 rounded-lg"
            >
            <td className='px-2'>{manufacturer.id}</td>
            <td className='px-2'>{manufacturer.name}</td>
            <td className='px-2'>{manufacturer.nameUK}</td>
            <td className='flex justify-end py-2'>
                <button
                    className='w-10 h-10 mr-2 bg-yellow rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
                    onClick={()=> changeButtonHandler()}
                >&#9998;
                </button>
                <button
                    className='w-10 h-10 mr-2 bg-red rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
                    onClick={()=> removeManufacturer(manufacturer)}
                >&#10060;
                </button>
            </td>
        </tr>
    );
}