import './Home.scss';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <section className='Home'>
            <h1>Ласкаво просимо на сайт Electro-goods</h1>
            <Link to="/admin">Admin panel</Link>
        </section>
    );
}