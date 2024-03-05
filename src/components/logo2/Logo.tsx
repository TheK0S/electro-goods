export const Logo = () => {
    return (
        <div className='logo w-17 border-dotted border-secondary border-1 
                        rounded-3xl justify-around h-7 pl-1 flex
                        xs:h-7  
                        
                        sm:w-40 
                        lg:pl-4 lg:w-64 lg:min-w-64 lg:h-12'>
            <div className='md:w-1/2'>
                <img className='logo-img w-full h-full' src="logo.jpg" alt="logo" />
            </div>
            <div className='logo-text w-1/3 text-[10px] leading-[10px]
                            hidden font-bold text-main self-center
                            sm:block 
                            lg:text-base'>
            завжди контакт
            </div>
        </div>
    );
}