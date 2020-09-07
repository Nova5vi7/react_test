import React from "react";
import "../styles/App.scss";
import Product from "./Product";

function Dropdown({ dropdownVisible, data, productDelete }) {
  return (
    <div
      className="like-dropdown"
      style={{
        display: dropdownVisible && data.length !== 0 ? "block" : "none",
      }}
    >
      {data.map((itm, ind) => {
        return <Product data={[itm]} productDelete={productDelete} key={ind} />;
      })}
    </div>
  );
}

export default Dropdown;
