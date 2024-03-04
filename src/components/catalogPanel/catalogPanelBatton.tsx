export const CatalogPanelButton = () => {

    return (
        <div className="catalogPanel-wrap flex justify-start items-center pl-5 cursor-pointer
                        bg-main text-modal hover:text-secondary rounded-full text-base
                        xs:leading-5
                        "
        >
            <div className="catalogPanel-icon pr-3 xs:pr-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 xs:w-9 xs:h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
            </div>
            <div className="catalogPanel-text">каталог товарів</div>
        </div>
    )
}