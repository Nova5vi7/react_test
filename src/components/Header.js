import React from "react";
import { NavLink } from "react-router-dom";
import ellipse from "../image/ellipse.png";
import Dropdown from "./Dropdown";

const LikeBtn = ({ onClick, icon }) => {
  let className = "";
  switch (icon) {
    case "like":
      className = "fa-heart-o";
      break;
    case "cart":
      className = "fa-shopping-basket";
      break;
    default:
      className = "fa-angellist";
  }
  return (
    <button className="header__image-like" onClick={() => onClick(true)}>
      <i className={`fa ${className}`} />
    </button>
  );
};

function Header({
  dataLikeProductFilter,
  dataBasketProductsFilter,
  handleLikeDelete,
  handleBasketDelete,
}) {
  return (
    <header className="header">
      <div className="header__logo-wrap">
        <div className="header__logo">
          <img src={ellipse} alt="logo" />
        </div>
        <NavLink activeClassName="true" to="/products">
          <h3 className="header__logo-title">STUFF</h3>
        </NavLink>
      </div>

      <div className="header__nav">
        <div className="header__nav-wrap">
          <Dropdown
            data={dataLikeProductFilter}
            productDelete={handleLikeDelete}
            dropdownTrigger={LikeBtn}
            icon="like"
          />
        </div>
        <div className="header__nav-wrap">
          <Dropdown
            data={dataBasketProductsFilter}
            productDelete={handleBasketDelete}
            dropdownTrigger={LikeBtn}
            icon="cart"
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
