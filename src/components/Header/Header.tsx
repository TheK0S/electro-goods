import { Logo } from '../logo/Logo';
import { SearchPanel } from '../searchPanel/SearchPanel';
import { ContactsPanel } from '../contactsPanel/ContactsPanel';
import { IconsPanel } from '../iconsPanel/IconsPanel';
import { LanguagePanel } from '../languagePanel/LanguagePanel';


export const Header = () => {
    return (
        <header className="flex flex-col md:flex-row justify-between md:items-center">
            <Logo />
            <SearchPanel/>
            <ContactsPanel/>
            <IconsPanel/>
            <LanguagePanel/>
            {/* <FavoriteIcon/> */}
            {/* <ProductsCartPanel/> */}
        </header>
    );
}