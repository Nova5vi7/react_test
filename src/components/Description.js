import React from "react";
import Button from "./Button";
import Like from "./Like";

function Description({ products, product }) {
  return (
    <div className="description">
      {products.map((itm) => {
        return (
          <div className="description__wrap" key={itm.id}>
            <div className="description__img-wrap">
              <img src={itm.img} alt="descript-img" />
            </div>
            <div className="description__content">
              <h2 className="description__title">
                {itm.name} {product}
              </h2>

              <p className="description__price">
                {itm.discount ? itm.price * itm.discount : itm.price} $
              </p>

              <p className="description__descript">{itm.description}</p>

              <div className="description__nav">
                <Button />
                <Like id={itm.id} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Description;
