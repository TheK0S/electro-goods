import './Home.scss';
import { Link } from 'react-router-dom';
import { Categories } from '../../components/categoriesList/Categories';

export const Home = () => {
    return (
        <section className='Home p-3'>
            <h1>Ласкаво просимо на сайт Electro-goods</h1>
            <Link to="/admin" className='px-4 py-2 bg-succes rounded-md font-bold text-modal'>Admin panel</Link>
            <Categories/>
        </section>
    );
}