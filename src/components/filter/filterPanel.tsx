import { useShowFilterContext } from "../../servises/showComponentContext";
import { useFormik } from "formik";
import { useState } from "react";

interface FormValues {
  minPrice: string;
  maxPrice: string;
  manufacturers: string[];
  countryOfOrigin: [];
}

interface Element {
  id: string;
  name: string;
}

export const brends = [
  {
    id: "1",
    name: "gnhghgh",
  },
  {
    id: "2",
    name: "hbfgfh",
  },
  {
    id: "3",
    name: "gn525gh",
  },
  {
    id: "4",
    name: "gnhghgh",
  },
  {
    id: "52",
    name: "hbfgfh",
  },
  {
    id: "32",
    name: "gn525gh",
  },
  {
    id: "61",
    name: "gnhghgh",
  },
  {
    id: "72",
    name: "hbfgfh",
  },
  {
    id: "38",
    name: "gn525gh",
  },
];

export const FilterPanel = () => {
  const { showFilter } = useShowFilterContext();
  const [isOpenBrend, setIsOpenBrend] = useState(false);
  const [isOpencountryOfOrigin, setIsOpencountryOfOrigin] = useState(false);

  //add brends and countries from server for list of choice in the filtre
  const toggleDropdown = (
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setIsOpen(!isOpen);
  };
  const formik = useFormik<FormValues>({
    initialValues: {
      manufacturers: [],
      minPrice: "",
      maxPrice: "",
      countryOfOrigin: [],
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const filterItem = (arr: Element[], name: string) => {
    return (
      <div className="filtreCheckBox-wrap dropdown-content max-h-40 overflow-y-auto scrollable-list py-2">
        {arr.map((element) => {
          return (
            <div key={element.id}>
              <label>
                <input
                  type="checkbox"
                  name={name}
                  value={element.id}
                  onChange={formik.handleChange}
                />
                {element.name}
              </label>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <button
        onClick={() => {
          showFilter(false);
        }}
        className="bg-main w-20 h-10 text-[white]"
      >
        close
      </button>
      <form
        className="filter bg-secondary pt-5 pl-5 text-[36px] h-80 w-40 text-sm"
        onSubmit={formik.handleSubmit}
      >
        <label
          onClick={() => toggleDropdown(isOpenBrend, setIsOpenBrend)}
          htmlFor="manufacturers"
        >
          бренд
        </label>
        <div>{isOpenBrend && filterItem(brends, "manufacturers")}</div>

        <div className="flex">
          <label htmlFor="minPrice">від</label>
          <input
            className="ml-2 w-10"
            id="minPrice"
            name="minPrice"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.minPrice}
          />
          <label htmlFor="maxPrice">до</label>
          <input
            className="ml-2 w-10"
            id="maxPrice"
            name="maxPrice"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.maxPrice}
          />
        </div>
        <label
          onClick={() =>
            toggleDropdown(isOpencountryOfOrigin, setIsOpencountryOfOrigin)
          }
          htmlFor="countryOfOrigin"
        >
          Країна виробник
        </label>
        {isOpencountryOfOrigin && filterItem(brends, "countryOfOrigin")}
        <button className=" bg-main w-20 h-10 text-[white] " type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
