import React, { useState } from 'react';

export enum Languages {
    Ukrainian = 'УКР',
    Russian = 'РУС',
}

export const LanguagePanel = () => {

    const [language, setLanguage] = useState(Languages.Russian);
    const buttonClass = 'languagePanel-item w-10';
    const buttonClassChoisen = 'languagePanel-item bg-secondary w-10';

    const setbuttonClass=(lang:string)=>{
        return lang===language?buttonClassChoisen:buttonClass
    }

    return (
        <div className="languagePanel flex justify-between h-10">
            <button onClick={()=>setLanguage(Languages.Russian)} 
                className={setbuttonClass(Languages.Russian)}>{Languages.Russian}
            </button>
            <button onClick={()=>setLanguage(Languages.Ukrainian)} 
                className={setbuttonClass(Languages.Ukrainian)}>{Languages.Ukrainian}
            </button>
        </div>
    );
};