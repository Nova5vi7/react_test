import React from "react";
import "../styles/App.scss";

function Product({ data, productDelete }) {
  return (
    <div className="like-product">
      {data.map((itm) => {
        return (
          <div className="like-product__content-wrap" key={itm.id}>
            <div className="like-product__content">
              <div className="like-product__img-wrap">
                <img
                  className="like-product__img"
                  src={itm.img}
                  alt={`img${itm.name}`}
                />
              </div>
              <div className="like-product__content-info">
                <h4 className="like-product__content-name">{itm.name}</h4>
                <p className="like-product__content-price">
                  {itm.discount ? itm.price * itm.discount : itm.price}$
                </p>
              </div>
            </div>
            <div className="like-product__trash-wrap">
              <button
                className="like-product__trash"
                onClick={productDelete}
                id={itm.id}
              >
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
