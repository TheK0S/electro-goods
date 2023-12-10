import { Logo } from '../Logo/Logo';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import './Header.scss';


export const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <SearchPanel/>
            {/* <ContactsPanel/> */}
            {/* <FavoriteIcon/> */}
            {/* <ProductsCartPanel/> */}
        </header>
    );
}