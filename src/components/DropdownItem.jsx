import React from "react";
import NestedItem from "./NestedItem";

const DropdownItem = ({ item,nested, setActive }) => {
  const showNestedDropdown = ()=>{
    const nestedItem = nested || []
    return nestedItem.map(el=> <NestedItem name={`${item}_${el}`} /> )
  }
  return (
    <div className="dropdown_item">
      <div className="dropdown_item_inner" onClick={() => setActive(item)}>
      {item}
      <span className="arrow_wrapper">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 451 451"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
		L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
		c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"
            />
          </g>
        </svg>
      </span>
      </div>
      <div className="nested_dropdown">
        {showNestedDropdown()}
      </div>
    </div>
  );
};

export default DropdownItem;
