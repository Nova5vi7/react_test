import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/App.scss";
import ellipse from "../image/ellipse.png";
import Dropdown from "./Dropdown";

function Header({
  dropdownLikeVisible,
  dropdownBasketVisible,
  handlDropdownLikeClick,
  handleDropdownBasketClick,
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
          <button
            className={
              dropdownLikeVisible && dataLikeProductFilter.length !== 0
                ? "header__image-like active"
                : "header__image-like"
            }
            onClick={handlDropdownLikeClick}
          >
            <i className="fa fa-heart-o"></i>
          </button>
          <Dropdown
            dropdownVisible={dropdownLikeVisible}
            data={dataLikeProductFilter}
            productDelete={handleLikeDelete}
          />
        </div>
        <div className="header__nav-wrap">
          <button
            className={
              dropdownBasketVisible && dataBasketProductsFilter.length !== 0
                ? "header__image-basket active"
                : "header__image-basket"
            }
            onClick={handleDropdownBasketClick}
          >
            <i className="fa fa-shopping-basket"></i>
          </button>
          <Dropdown
            dropdownVisible={dropdownBasketVisible}
            data={dataBasketProductsFilter}
            productDelete={handleBasketDelete}
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
