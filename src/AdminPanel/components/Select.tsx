// import { Field } from "formik";
// import { SelectHTMLAttributes } from "react";

// export interface SelectOption {
//     value: string;
//     label: string;
// }

// interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
//     name: string;
//     options: SelectOption[];
// }
// export const Select:React.FC<SelectProps> = ({name, options, ...rest}) => {
//     return(
//         <Field 
//             as="select"
//             {...rest}
//             id={name}
//             name={name}
//         >
//             {options.map(option => (
//                 <option 
//                     key={option.value}
//                     value={option.value}
//                 >
//                     {option.value}
//                 </option>
//             ))}
//         </Field>
//     );
// }
// export default Select;

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    name: string;
    options: SelectOption[];
}

export const Select: React.FC<SelectProps> = ({name, options}) => {
    return(
        <select name={name} id={name}>
            {options &&
            options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.value}</option>
            ))
            }
        </select>
    )
}