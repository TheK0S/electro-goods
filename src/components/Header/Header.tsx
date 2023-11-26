import './Header.scss';
import { Sidenav } from '../Navigation/Sidenav';

export const Header = () => {
    return (
        <header className='Header'>
            <Sidenav />
        </header>
    );
}