import { useEffect, useState } from "react";

export interface PopupProps {
    title?: string;
    text?: string;
    isOpen: boolean;
    className?: string;
    showPopupMessage: Function
}

export const PopupStatusMessage:React.FC<PopupProps> = ({title, text, isOpen, className, showPopupMessage}) => {
   
    useEffect(()=>{
        setTimeout(() =>{
            showPopupMessage(false) 
        }, 2000);
        return 
    },[])
    return(
        isOpen?
            <div onClick={()=>showPopupMessage(false)} className={`${className} border p-4 rounded-md shadow-lg fixed z-50 top-5 right-5`}>
                        <h5 className="text-center font-bold">{title}</h5>
                        <p >{text}</p>
                    </div>
        :null
        );
}