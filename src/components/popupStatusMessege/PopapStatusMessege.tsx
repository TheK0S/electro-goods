import { useEffect, useState } from "react";

export interface PopupProps {
    title?: string;
    text?: string;
    isOpen: boolean;
    className?: string;
    onClose: Function    
}

export const PopupStatusMessege:React.FC<PopupProps> = ({title, text, isOpen, className, onClose}) => {
    
   
    useEffect(()=>{
        // setTimeout(() => onClose(), 3000);
        return
    },[])
    
    return(
        isOpen?
            <div className={`${className} border p-4 rounded-md shadow-lg fixed z-50 top-5 right-5`}>
                        <h5 className="text-center font-bold">{title}</h5>
                        <p>{text}</p>
                    </div>
                
        :null
        );
}