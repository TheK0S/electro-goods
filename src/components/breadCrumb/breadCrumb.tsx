export const BreadCrumb = () => {
  return (
    <nav>
      <ol className="breadcrumb flex">
        <li className="breadcrumb-item flex">
          <a href="/">
          <img className='logo-img inline-block h-5 w-5 mr-2' src="ELGOODS-64.png" alt="logo" />
          ElectroGoods</a>
        </li>
        <li className="breadcrumb-item 
                      before:content-['>'] before:mx-2 before:text-secondary before:font-bold"
          >Розетки, вимикачі
        </li>
      </ol>
    </nav>
  );
};
