import React from "react";

const NestedItem = ({ name }) => {
  return (
    <div className="dropdown_item">
      <label htmlFor={name} className="dropdown_item_inner">
        <input type="checkbox" id={name} />
        {name}
      </label>
    </div>
  );
};

export default NestedItem;
