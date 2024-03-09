import { Link } from 'react-router-dom';
import { BreadCrumb } from '../../components/breadCrumb/breadCrumb';
// import { ShowComponentContext } from '../../servises/showComponentContext';
import { FilterPanel } from '../../components/filter/filterPanel';

export const Home = () => {

    return (
        <section className='Home p-3'>
            <Link to="/admin" className='absolute top-3 right-60 px-4 py-2 bg-succes rounded-md font-bold text-modal'>Admin panel</Link>
            <BreadCrumb/>
            <FilterPanel/>
            
        </section>
    );
}