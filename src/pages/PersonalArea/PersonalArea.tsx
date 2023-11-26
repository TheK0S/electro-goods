import './PersonalArea.scss';
import { Link, useLoaderData } from 'react-router-dom';
import User from '../../interfaces/User';

export const PersonalArea = () => {
    const routeId:any = useLoaderData();
    const userId: string = routeId.params.userId;
    const user:User = {
        id: userId, 
        name:'Konstantin'
    };
    
    return (
        <div className='PersonalArea'>
            <h3>Особистий кабінет користувача</h3>
            <p><b>{user.name}</b></p>
        </div>
    );
}