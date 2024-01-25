import { useEffect, useRef } from "react";

interface ModalWindowProps {
    isOpen: boolean;
    onClose: Function;
    children: React.ReactNode; 
}

export const ModalWindow: React.FC<ModalWindowProps> = ({isOpen, onClose, children}) => {
    const wrapperClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        const madalWrapper = event.target as HTMLDivElement;
        if(madalWrapper.id === "modalWrapper"){
            onClose();
        }
    }
    
    return(
        <>
            {isOpen &&
                <div
                    onClick={wrapperClickHandler}
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-modalwrapper"
                    id="modalWrapper"
                >
                <div className="relative max-w-full max-h-full overflow-hidden bg-modal p-10 rounded-lg min-w-[40%]">
                    <button
                        className="absolute top-1 right-2"
                        onClick={()=> onClose()}
                    >✕
                    </button>
                    {children}
                </div>
            </div>}    
        </>        
    );
}