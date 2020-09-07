import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../styles/App.scss";
import Button from "./Button";
import Like from "./Like";

function Card({
  product,
  likeClick,
  likeProducts,
  basketClick,
  basketProducts,
}) {
  return (
    <div className="card">
      {product.map((itm) => {
        return (
          <div className="card__card" key={itm.id}>
            <NavLink to={`/product/${itm.id}`}>
              <img src={itm.img} className="card__img" alt="product-img" />
            </NavLink>
            <h3 className="card__name">{itm.name}</h3>
            <div className="card__price-wrap">
              <p className="card__price">
                {itm.discount ? itm.price * itm.discount : itm.price}$
              </p>
              <p className="card__discount">
                {itm.discount ? `${itm.price}$` : null}
              </p>
            </div>
            <div className="card__btn-wrap">
              <Button
                id={itm.id}
                basketClick={basketClick}
                basketProduct={basketProducts.includes(String(itm.id))}
              />
              <Like
                id={itm.id}
                likeClick={likeClick}
                likeProduct={likeProducts.includes(String(itm.id))}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default withRouter(Card);
