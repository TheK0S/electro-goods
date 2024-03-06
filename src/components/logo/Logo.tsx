import { email } from "../../constants";
export const Logo = () => {
    return (
        <div className='logo w-6 h-6 ml-7 
                        inline-block
                        xs:w-40 xs:ml-0 
                        sm:w-40 sm:h-9
                        lg:pl-0 lg:w-64 lg:min-w-64 lg:h-10'>
            <a href="#" className='inline-block h-6 w-6
                                    sm:h-9 sm:w-9
                                    lg:h-10 lg:w-10 '>
                <img className='logo-img' src="ELGOODS-64.png" alt="logo" />
            </a>
            <a href={`mailto:${email}`} className=' hidden logo-text inline-block ml-2 text-[10px]
                            font-bold text-main self-center
                            xs:text-[11px] xs:align-top xs:pt-[8px]
                            sm:inline-block
                            lg:text-base'>
            {email}
            </a>
        </div>
    );
}