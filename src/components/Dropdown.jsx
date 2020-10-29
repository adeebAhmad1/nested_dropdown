import React, { useEffect, useState } from "react";
import DropdownItem from "./DropdownItem";

const Dropdown = ({ data }) => {
  const [open, setOpen] = useState(null);
  const [active, setActive] = useState(data[0].item);
  const [value, setValue] = useState("");
  const showDropdownItem = () => {
    const mydata = data.filter((el) => {
      if (el.item.toLowerCase().indexOf(value.toLowerCase()) > -1) {
        return true;
      } else {
        return false;
      }
    });
    return mydata.map((el, i) => (
      <DropdownItem setActive={setActive} {...el} key={i} />
    ));
  };
  useEffect(() => setOpen(false), [active]);
  return (
    <div className="dropdown_wrapper">
      <span className="selected_option" onClick={() => setOpen(true)}>
        {active}
        <span className="arrow_botttom">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 292.362 292.362"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
		C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
		s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
              />
            </g>
          </svg>
        </span>
      </span>
      <div
        onClick={() => setOpen(null)}
        className={open ? "close_btn" : ""}
      ></div>

      {open ? (
        <div className="dropdown">
          <div className="dropdown_input">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type code or description"
              type="text"
            />
          </div>
          {showDropdownItem()}
          <div className="button_wrapper">
            <button className="btn_cancel" onClick={()=> setOpen(null)}>Cancel</button>
            <button className="btn_add">Add</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
