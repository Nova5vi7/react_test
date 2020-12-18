import React from "react";

function Product({ data, productDelete }) {
  const { id, name, price, discount, img } = data;
  return (
    <div className="like-product">
      <div className="like-product__content-wrap" key={id}>
        <div className="like-product__content">
          <div className="like-product__img-wrap">
            <img className="like-product__img" src={img} alt={`img${name}`} />
          </div>
          <div className="like-product__content-info">
            <h4 className="like-product__content-name">{name}</h4>
            <p className="like-product__content-price">
              {discount ? price * discount : price}$
            </p>
          </div>
        </div>
        <div className="like-product__trash-wrap">
          <button
            className="like-product__trash"
            onClick={() => productDelete(id)}
            id={id}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
