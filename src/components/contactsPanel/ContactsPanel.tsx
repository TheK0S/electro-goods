import { useState } from "react";

import {PhoneNumber} from '../../constants';

export const ContactsPanel = () => {

    const [isAdditionalContactPanel, showContactsPanel] = useState(false)

    return (
        <div className='contactsPanel-wrap flex text-xs items-center'>
            <div className="contactPanel-icon px-1 relative" 
                onClick={()=>showContactsPanel(!isAdditionalContactPanel)}>      
                <div className="relative z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="-8 0 38 25" 
                         strokeWidth={1.5} stroke="white" 
                        className="w-6 h-6 bg-secondary rounded-full 
                            sm:w-8 sm:h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                {isAdditionalContactPanel
                    ?<div 
                        className="additionalContactPanel block absolute w-30 h-20 
                                    z-10 bg-[#ffffff] right-[0px] top-[-4px] 
                                    rounded-[5%] rounded-tr-[18px] 
                                    border-2 border-main_02 shadow-xl shadow-main 
                                    p-3 
                                    xs:hidden">
                        <div className="mt-6 mx-auto relative ">контакти:</div>
                        <a href={'tel:'+PhoneNumber} title="зателефонуйте нам">{PhoneNumber}</a>
                        </div>
                    :''
                }    
                </div>

            <div className="contactPanel-text-wrap font-bold text-main_08 px-1">
                <div className="contactPanel-text uppercase text-[10px] tracking-wide 
                              hidden sm:block">контактний номер телефону
                </div>
               <a className='contactPanel-phone w-full self-center tracking-wider hidden
                            md:leading-[16px] md:text-lg
                            xs:text-sm xs:block'
               href={'tel:'+PhoneNumber} title="зателефонуйте нам">{PhoneNumber}</a>
            </div>
        </div>
    )
}