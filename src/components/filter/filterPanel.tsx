import { useShowFilterContext } from "../../servises/showComponentContext";

export const FilterPanel = () => {
  const { isShowFilter, showFilter } = useShowFilterContext();

   if (isShowFilter) return(
    <>
    <button onClick={()=>{showFilter(false)}} className="bg-main w-20 h-10 text-[white]">close</button>
    <h1 className="bg-secondary pt-5 pl-5 text-[36px] h-80 w-40">filter</h1>
    
    </>
   
   )
   else return null
  
};
