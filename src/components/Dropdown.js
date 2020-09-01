import React from "react";
import "../App.scss";

function Dropdown({ dropdownVisible, data }) {
  return (
    <div
      className="like-dropdown"
      style={{ display: dropdownVisible ? "block" : "none" }}
    >
      {data.map((itm) => {
        return (
          <div className="like-dropdown__content-wrap" key={itm.id}>
            <div className="like-dropdown__content">
              <div className="like-dropdown__img-wrap">
                <img
                  className="like-dropdown__img"
                  src={itm.img}
                  alt={`img${itm.name}`}
                />
              </div>
              <div className="like-dropdown__content-info">
                <h4>{itm.name}</h4>
                <p>{itm.price}</p>
              </div>
            </div>
            <div className="like-dropdown__trash-wrap">
              <button className="like-dropdown__trash">
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Dropdown;
