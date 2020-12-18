import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Button from "./Button";
import Like from "./Like";

function Card({
  product,
  likeClick,
  likeProducts,
  basketClick,
  basketProducts,
}) {
  const { id, name, discount, img, price } = product;

  return (
    <div className="card">
      <div className="card__card" key={id}>
        <NavLink to={`/product/${id}`}>
          <img src={img} className="card__img" alt="product-img" />
        </NavLink>
        <h3 className="card__name">{name}</h3>
        <div className="card__price-wrap">
          <p className="card__price">{discount ? price * discount : price}$</p>
          <p className="card__discount">{discount ? `${price}$` : null}</p>
        </div>
        <div className="card__btn-wrap">
          <Button
            id={id}
            basketClick={basketClick}
            basketProduct={basketProducts.includes(id)}
          />
          <Like
            id={id}
            likeClick={likeClick}
            likeProduct={likeProducts.includes(id)}
          />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Card);
