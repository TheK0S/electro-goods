import { FormikErrors, FormikValues, useFormik } from "formik";
import { ModalWindow } from "../../components/ModalWindow";

interface CreateOrderStatusModalProps{
    createOrderStatus: Function;
    isOpen: boolean;
    onClose: Function;
}

export const CreateOrderStatusModal:React.FC<CreateOrderStatusModalProps> = ({createOrderStatus, isOpen, onClose}) => {
    const formic = useFormik({
        initialValues: {
            statusName: '',
            statusNameUK: ''
        },
        validate: values => {
            let errors: FormikErrors<FormikValues> = {};
            if(!values.statusName){
                errors.statusName = 'Поле не может быть пустым'
            }else if(values.statusName.length < 3){
                errors.statusName = 'Поле должно иметь 3 и более символов'
            }

            if(!values.statusNameUK){
                errors.statusNameUK = 'Поле не может быть пустым'
            }else if(values.statusNameUK.length < 3){
                errors.statusNameUK = 'Поле должно иметь 3 и более символов'
            }

            return errors;
        },
        onSubmit: values => {
            createOrderStatus({id: 0, statusName: values.statusName, statusNameUK: values.statusNameUK});
            resetForm();
        },
    })

    const {touched, errors, resetForm} = formic;

    return (
        <ModalWindow isOpen={isOpen} onClose={onClose}>
            <h3 className="text-center text-lg font-bold">Добавление нового статуса</h3>
            <form onSubmit={formic.handleSubmit} className="flex flex-col">
                <label className="mt-5" htmlFor="statusName">Имя статуса на русском</label>
                <input
                    id="statusName"
                    name="statusName"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.statusName}
                />
                {touched.statusName && errors.statusName ? (<div className="font-bold text-danger">{errors.statusName}</div>) : null}
                <label className="mt-5" htmlFor="statusName">Имя статуса на украинском</label>
                <input
                    id="statusNameUK"
                    name="statusNameUK"
                    type="text"
                    className="rounded-md px-1"
                    onChange={formic.handleChange}
                    onBlur={formic.handleBlur}
                    value={formic.values.statusNameUK}
                />
                {touched.statusNameUK && errors.statusNameUK ? (<div className="font-bold text-danger">{errors.statusNameUK}</div>) : null}
                <button
                    type="submit"
                    className="bg-succes text-modal font-bold mt-10 py-2 px-4 rounded-md"
                >Добавить статус заказа</button>
            </form>
        </ModalWindow>
    );
}