import './Logo.scss';

export const Logo = () => {
    return (
        <div className='logo'>
            <img className='logo-img' src="logo.jpg" alt="logo" />
            <div className='logo-text'>завжди контакт</div>
        </div>
    );
}