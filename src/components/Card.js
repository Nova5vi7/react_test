import React from "react";
import { NavLink } from "react-router-dom";
import "../App.scss";
import Button from "./Button";
import Like from "./Like";

function Card({ products, likeClick }) {
  return (
    <div className="cards">
      <h1 className="cards__title">Products</h1>
      <div className="cards__wrap">
        {products.map((itm, ind) => {
          return (
            <div className="cards__card" key={itm.id}>
              <NavLink to={`/product${itm.id}`}>
                <img src={itm.img} className="cards__img" alt="product-img" />
              </NavLink>
              <h3 className="cards__name">{itm.name}</h3>
              <div className="cards__price-wrap">
                <p className="cards__price">
                  {itm.discount ? itm.price * itm.discount : itm.price} $
                </p>
                <p className="cards__discount">
                  {itm.discount ? `- ${itm.discount}` : null}
                </p>
              </div>
              <div className="cards__btn-wrap">
                <Button />
                <Like id={itm.id} likeClick={likeClick} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
