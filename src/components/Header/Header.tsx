import { Logo } from '../Logo/Logo';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { ContactsPanel } from '../ContactsPanel/ContactsPanel';
import { IconsPanel } from '../IconsPanel/IconsPanel';
import { LanguagePanel } from '../LanguagePanel/LanguagePanel';


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