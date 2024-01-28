import { useFormik } from "formik";
import { ProductAttribute } from "../../../interfaces/admin.data"

interface CreateAttributeProps {
    createAttribut: Function;    
}

export const CreateAttribute: React.FC<CreateAttributeProps> = ({createAttribut}) => {
    const formikCreate = useFormik({
        initialValues: {
            
        },
        onSubmit: values => {
            createAttribut(values as ProductAttribute);
        }
    });
    return(
        <></>
    );
}