import { ProductAttribute } from "../../../interfaces/admin.data";
import { EditButton } from "../../components/EditButton";
import { RemoveButton } from "../../components/RemoveButton";

interface AttributesListProps{
    attributes: ProductAttribute[];

}

export const AttributesList: React.FC<AttributesListProps> = ({attributes}) => {
    return(
            <table className='table-auto w-full border-spacing-2 my-5'>
                <thead>
                    <tr>
                        <th><b>Имя RU</b></th>
                        <th><b>Значение RU</b></th>
                        <th><b>Имя UA</b></th>
                        <th><b>Значение UA</b></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {attributes&& 
                        attributes.map((attribute) => (
                            <tr key={attribute.attributeId} className="py-2 px-4
                                hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]
                                transition-shadow duration-300 rounded-lg"
                            >
                                <td className='px-2'>
                                    <p>{attribute.attributeName}</p>
                                </td>
                                <td className='px-2 text-center'>
                                    <p>{attribute.attributeValue}</p>
                                </td>
                                <td className='px-2'>
                                    <p>{attribute.attributeNameUK}</p>
                                </td>
                                <td className='px-2 text-center'>
                                    <p>{attribute.attributeValueUK}</p>
                                </td>
                                <EditButton onClick={() => {}} />
                                <RemoveButton onClick={() => {}} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    );
}