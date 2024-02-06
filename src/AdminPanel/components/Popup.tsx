import { useRef } from "react";
import { ClassificationTypeNames } from "typescript";

export interface PopupProps {
    title?: string;
    text?: string;
    onClose: Function;
    className?: string;
}

export const Popup: React.FC<PopupProps> = ({title, text, onClose, className}) => {
    setTimeout(() => onClose(), 3000);
    return(
        <div className={`${className} border p-4 rounded-md shadow-lg fixed z-50 top-5 right-5`}>
            <h5 className="text-center font-bold">{title}</h5>
            <p>{text}</p>
        </div>
    );
}