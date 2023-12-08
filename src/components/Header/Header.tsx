import './Header.scss';
import { Logo } from '../Logo/Logo';

export const Header = () => {
    return (
        <header className='Header'>
            <Logo />
            {/* <SearchPanel/> */}
            {/* <ContactsPanel/> */}
            {/* <FavoriteIcon/> */}
            {/* <ProductsCartPanel/> */}
        </header>
    );
}