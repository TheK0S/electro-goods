import { FooterNav } from '../navigation/FooterNav';

export const Footer = () => {
    const w = 500;
    return (
        <footer className={`Footer inline-block w-[calc(theme('width.full')-(theme('container.padding.xl'))*2)]
                           absolute bottom-0 bg-main_08 text-secondary`}>
            <FooterNav />   
            it wont't to be sideNav
          
        </footer>
    );
}