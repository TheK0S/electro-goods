import './Header.scss';
import { Logo } from '../Logo/Logo';

export const Header = () => {
    return (
        <header className='Header'>
            <>тут будет панель с логотипом</>
            <Logo />
            {/* <SearchPanel/> */}
            {/* <ContactsPanel/> */}
            {/* <FavoriteIcon/> */}
            {/* <ProductsCartPanel/> */}
        </header>
    );
}