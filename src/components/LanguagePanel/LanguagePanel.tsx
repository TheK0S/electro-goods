import {useSelector } from 'react-redux';
import type { RootState } from '../../store/store'
import { languageChange } from '../../store/language.slice';
import { useDispatchedActions } from '../../hooks/UseActions';

export enum Languages {
    Ukrainian = 'УКР',
    Russian = 'РУС',
}

export const LanguagePanel = () => {

    const mainLanguage = useSelector ((state:RootState) => state.languageReducer.languageValue);
    const buttonClass = 'languagePanel-item w-1/2 ';
    const buttonClassChoisen = 'languagePanel-item bg-secondary w-1/2 ';
    const setLanguage = useDispatchedActions(languageChange)
    const setbuttonClass=(lang:string)=>{
        return lang===mainLanguage?buttonClassChoisen:buttonClass
    }

    return (
        <div className="languagePanel flex justify-between text-[10px] w-12 h-6 
                        sm:w-18 sm:h-9 sm:text-xs
                        lg:w-20 lg:h-10 lg:text-sm">
            
            <button onClick={()=>setLanguage(Languages.Ukrainian)} 
                className={setbuttonClass(Languages.Ukrainian)}>{Languages.Ukrainian}
            </button>
            <button onClick={()=>setLanguage(Languages.Russian)} 
                className={setbuttonClass(Languages.Russian)}>{Languages.Russian}
            </button>
        </div>
    );
};