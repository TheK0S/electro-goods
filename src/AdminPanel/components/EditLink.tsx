import { HTMLAttributeReferrerPolicy } from "react";
import { Link } from "react-router-dom";

interface EditLinkProps{
    to: string;
}

export const EditLink: React.FC<EditLinkProps> = ({to}) => {
    return(
        <Link
            to={to}
            className='flex items-center justify-center w-10 h-10 mr-2 bg-yellow rounded-lg shadow-lg hover:scale-110 transition-transform duration-300'
        >
            <span>
                &#9998;
            </span>
        </Link>
    );
}