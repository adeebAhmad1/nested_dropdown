import React, { useEffect, useState } from "react";
import DropdownItem from "./DropdownItem";

const Dropdown = ({ data }) => {
  const [open, setOpen] = useState(null);
  const [active, setActive] = useState(data[0].item);
  const showDropdownItem = () => {
    return data.map((el, i) => (
      <DropdownItem setActive={setActive} {...el} key={i} />
    ));
  };
  useEffect(() => setOpen(false), [active]);
  return (
    <div className="dropdown_wrapper">
      <span className="selected_option" onClick={() => setOpen(true)}>
        {active}
      </span>
      <div
        onClick={() => setOpen(null)}
        className={open ? "close_btn" : ""}
      ></div>

      {open ? 
        <div className="dropdown">
          <div className="dropdown_input">
            <input placeholder="Type code or description" type="text"/>
          </div>
          {showDropdownItem()}
          <div className="button_wrapper">
            <button className="btn_cancel">Cancel</button>
            <button className="btn_add">Add</button>
          </div>
        </div> : ""}
    </div>
  );
};

export default Dropdown;
