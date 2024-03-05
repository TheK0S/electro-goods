import { FooterNav } from '../navigation/FooterNav';

export const Footer = () => {
    return (
        <footer className={`Footer inline-block absolute bottom-0 bg-main_08 text-secondary
                            w-[calc(theme('width.full')-(theme('container.padding.DEFAULT'))*2)]
                            xl:w-[calc(theme('width.full')-(theme('container.padding.xl'))*2)]`
                        }
        >
            <FooterNav />
            it wont't to be sideNav
        </footer>
    );
}