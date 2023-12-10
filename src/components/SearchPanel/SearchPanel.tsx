import "./SearchPanel.scss";

export const SearchPanel = () => {

  let setDataSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dataSearchValue = e.target.value

  }

  return (
    <div className="search-form-wrap">
      <div className="form-element-wrapper">
        <div className="loader-circle" id="header-search-loader">
          </div>  {/*show loader*/ }
        <input type="text" className="form-control input-search ui-autocomplete-input" id="header-search-field" name="term" value="" placeholder="Пошук..." autoComplete="off"/>
          <button className="btn-search">
          <i className="icon-search"></i>
          </button>
      </div>
      <div className="search-results" id="header-search-result">
        {/* <ul className="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content" id="ui-id-1" > */}
        {/* </ul> */}
      </div>
    </div>
  );
};