import { Link } from 'react-router-dom';
import { BreadCrumb } from '../../components/breadCrumb/breadCrumb';
import { FilterPanel } from '../../components/filter/filterPanel';
import { InvitedContent } from '../../components/invitedContent/InvitedContent';
import { useShowInvitedContentContext } from "../../servises/showComponentContext";
import { useShowBreadCrumbContext } from "../../servises/showComponentContext";
import { useShowFilterContext } from "../../servises/showComponentContext";

export const Home = () => {

    const { isShowInvitedContent, showInvitedContent } = useShowInvitedContentContext();
    const { isShowFilter, showFilter } = useShowFilterContext();
    const { isShowBreadCrumb, showBreadCrumb } = useShowBreadCrumbContext();

    return (
        <section className='Home p-3'>
            <Link to="/admin" className='absolute top-3 right-60 px-4 py-2 bg-succes rounded-md font-bold text-modal'>Admin panel</Link>
            {isShowBreadCrumb&&<BreadCrumb/>}
            { isShowFilter&&<FilterPanel/>}
            {isShowInvitedContent&&<InvitedContent/>}
            
        </section>
    );
}