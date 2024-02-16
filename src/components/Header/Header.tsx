import { Logo } from '../Logo/Logo';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { ContactsPanel } from '../ContactsPanel/ContactsPanel';
import { IconsPanel } from '../IconsPanel/IconsPanel';
import { LanguagePanel } from '../LanguagePanel/LanguagePanel';
import { CatalogPanel } from '../catalogPanel/catalogPanel';

export const Header = () => {
    return (
        <header className="grid grid-rows-2 grid-cols-12 gap-y-4 
                           xs:grid-cols-10 
                           lg:flex lg:flex-row lg:justify-between lg:items-center">
            <div className="col-span-2"><Logo /></div>
            <div className='row-start-2 col-start-1 md:hidden'><CatalogPanel/></div>
            <div className="row-start-2 col-start-4 col-span-8 md:col-start-1 md:col-span-12"><SearchPanel/></div>
            <div className="row-start-1 col-start-5 col-span-4 xs:col-start-4"><ContactsPanel/></div>
            <div className="row-start-1 col-start-7 col-span-1 xs:col-start-8 xs:col-span-1"><IconsPanel/></div>
            <div className="row-start-1 col-start-12 col-span-1 justify-self-end xs:col-start-10 xs:col-span-1"><LanguagePanel/></div>
        </header>
    );
}