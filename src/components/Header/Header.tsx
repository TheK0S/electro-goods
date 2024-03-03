import { Logo } from '../logo/Logo';
import { SearchPanel } from '../searchPanel/SearchPanel';
import { ContactsPanel } from '../contactsPanel/ContactsPanel';
import { IconsPanel } from '../iconsPanel/IconsPanel';
import { LanguagePanel } from '../languagePanel/LanguagePanel';
import { CatalogPanelButton } from '../catalogPanel/catalogPanelBatton';
import {Catalog} from '../navigation/CatalogList'

export const Header = () => {
    return (
        <header className="grid grid-rows-2 grid-cols-12 gap-y-4 
                           xs:grid-cols-10 
                           lg:flex lg:flex-row lg:justify-between lg:items-center">
            <div className="col-span-2"><Logo /></div>
            <div className='row-start-3 col-start-2 col-end-12
                            xs:row-start-2 xs:col-start-1 xs:col-end-4
                            md:hidden'>
                <CatalogPanelButton/>
            </div>
            <div className="row-start-2 col-start-2 col-end-12 col-span-8 
                            xs:col-start-5 xs:col-end-12 
                            md:col-start-1 md:col-span-12">
                <SearchPanel/>
            </div>
            <div className="row-start-1 col-start-5 col-span-4 xs:col-start-4">
                <ContactsPanel/>
            </div>
            <div className="row-start-1 col-start-7 col-span-1 
                            xs:col-start-8 xs:col-span-1">
                <IconsPanel/>
            </div>
            <div className="row-start-1 col-start-12 col-span-1 justify-self-end 
                            xs:col-start-10 xs:col-span-1">
                <LanguagePanel/>
            </div>
            <div className="row-start-3">
                <Catalog />
            </div>

        </header>
    );
}