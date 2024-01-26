import { useFormik } from "formik";
import { OrderStatus } from "../../../interfaces/admin.data";
import { ModalWindow } from "../../components/ModalWindow";

interface EditOrderStatusModalProps {
    orderStatus: OrderStatus | null;
    updateOrderStatus: Function;
    isOpen: boolean;
    onClose: Function;
}

export const EditOrderStatusModal: React.FC<EditOrderStatusModalProps> = ({orderStatus, updateOrderStatus, isOpen, onClose}) => {
    const formicEdit = useFormik({
        initialValues: {
            statusName: orderStatus?.statusName ?? '',
            statusNameUK: orderStatus?.statusNameUK ?? ''
        },
        onSubmit: values =>{
            updateOrderStatus({id: orderStatus?.id, statusName: values.statusName, statusNameUK: values.statusNameUK});
            onClose();
        },
    })
    return (
        <ModalWindow
            isOpen={isOpen}
            onClose={onClose}
        >
            <h3 className="text-center text-lg font-bold">Редактирование статуса заказа</h3>
            <form
            onSubmit={formicEdit.handleSubmit}
            className="flex flex-col"
            >
                <label htmlFor="statusName" className="mt-5">Имя статуса на русском</label>
                <input
                    id="statusName"
                    name="statusName"
                    type="text"
                    className="rounded-md mb-5 px-1"
                    onChange={formicEdit.handleChange}
                    value={formicEdit.values.statusName}
                />
                <label htmlFor="statusName" className="mt-5">Имя статуса на украинском</label>
                <input
                    id="statusNameUK"
                    name="statusNameUK"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formicEdit.handleChange}
                    value={formicEdit.values.statusNameUK}
                />
                <div className="flex mt-10 justify-center">
                <button
                    type="submit"
                    className="bg-succes text-modal font-bold py-2 px-4 mx-2 rounded-md"
                >Сохранить
                </button>
                <button
                    type="button"
                    className="bg-primary text-modal font-bold py-2 px-4 mx-2 rounded-md"
                    onClick={() => onClose()}
                >Отменить
                </button>
                </div>

            </form>
        </ModalWindow>
    );
}