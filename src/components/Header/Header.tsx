import { Logo } from '../Logo/Logo';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import { ContactsPanel } from '../ContactsPanel/ContactsPanel';
// import './Header.scss';


export const Header = () => {
    return (
        <header className="flex flex-col md:flex-row justify-between md:items-center">
            <Logo />
            <SearchPanel/>
            <ContactsPanel/>
            {/* <FavoriteIcon/> */}
            {/* <ProductsCartPanel/> */}
        </header>
    );
}