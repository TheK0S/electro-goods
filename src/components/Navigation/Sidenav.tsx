import './Sidenav.scss';
import { Link } from 'react-router-dom';

export const Sidenav = () => {
    return (
        <nav className='Sidenav'>
            <ul>
                <li>
                    <Link to="/">Головна</Link>
                </li>
                <li>
                    <Link to="/personalarea/1">Особистий кабінет</Link>
                </li>
            </ul>
        </nav>
    );
}