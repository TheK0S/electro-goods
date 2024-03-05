import { Logo } from '../logo/Logo';
import { SearchPanel } from '../searchPanel/SearchPanel';
import { ContactsPanel } from '../contactsPanel/ContactsPanel';
import { IconsPanel } from '../iconsPanel/IconsPanel';
import { LanguagePanel } from '../languagePanel/LanguagePanel';
import { CatalogPanelButton } from '../catalogPanel/catalogPanelBatton';
import { Catalog} from '../navigation/CatalogList'
import { useState, } from 'react';

export const Header = () => {

    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    function showCatalog(value:boolean) {
        setIsCatalogOpen(value);
    }

    return (
        <header className="grid grid-rows-2 grid-cols-12 gap-y-4 
                           xs:grid-cols-10 
                           lg:flex lg:flex-wrap lg:flex-row lg:justify-between lg:items-center">
            <div className="col-span-2"><Logo /></div>
            <div className={`row-start-3 col-start-2 col-end-12
                            xs:row-start-2 xs:col-start-1 xs:col-end-4
                            lg:hidden`}
                onClick={()=>{showCatalog(!isCatalogOpen)}}
            >
                <CatalogPanelButton/>
            </div>
            <div className="row-start-2 col-start-2 col-end-12 col-span-8 
                            xs:col-start-5 xs:col-end-12 
                            lg:col-start-1 lg:col-span-12">
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
            <div className="row-start-3 w-full
                            md:col-start-1 md:col-end-12" >
                <Catalog isCatalogOpen={isCatalogOpen} showCatalog={showCatalog} />
            </div>
        </header>
    );
}