export const SearchPanel = () => {

  let setDataSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dataSearchValue = e.target.value

  }

  return (
    <div className="searchForm-wrap block h-8 md:h-8 
                    lg:min-w-[300px] 
                    xl:min-w-[500px]">
      <div className="searchForm-element-wrapper flex relative">
        <div className="searchForm-loader-circle block absolute top-1/2 
        translate-y-1/2 w-5 h-5 
        before:absolute before:content-{''} before:t-0 before:l-0 before:w-5 before:h-5 
        before:border-2 before:border-solid before:rounded-[100%] before:z-10 
        before:border-transparent before:border-t-secondary before:animate-spin
         " id="header-search-loader">
          </div>  {/*show loader*/ }
        <input type="text" className="searchForm-input w-full h-8 md:h-8 pr-8 pl-5 
        border-1 border-solid border-main_02 rounded-full text-base" 
        id="searchForm-input text-sm" name="term"  placeholder="Пошук..." autoComplete="off"/>
          <button className="searchForm-icon-wrap absolute text-secondary right-[8px] top-[3px] bottom-0 rounded-r-10
           ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
      </div>
      <div className="search-results" id="header-search-result">
      </div>
    </div>
  );
};