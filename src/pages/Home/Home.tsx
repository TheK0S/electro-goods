import { Link } from 'react-router-dom';
import { BreadCrumb } from '../../components/breadCrumb/breadCrumb';

export const Home = () => {
    return (
        <section className='Home p-3'>
            <Link to="/admin" className='px-4 py-2 bg-succes rounded-md font-bold text-modal'>Admin panel</Link>
            <BreadCrumb/>
        </section>
    );
}