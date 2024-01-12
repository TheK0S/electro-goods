export const Logo = () => {
    return (
        <div className='logo flex justify-around w-40 h-7 pl-1 md:pl-4 
            md:w-64 md:min-w-64 md:h-12 border-dotted border-secondary 
            border-1 rounded-3xl'>
            <div className=' w-1/2'><img className='logo-img w-full h-full' src="logo.jpg" alt="logo" />
                </div>
            <div className='logo-text w-1/3 text-[10px] leading-[10px]  md:text-base font-bold text-main self-center'>завжди контакт</div>
        </div>
    );
}