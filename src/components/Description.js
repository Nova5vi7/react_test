import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Like from "../components/Like";

function Description({ match, products, ...rest }) {
  let { id } = useParams();
  console.log(products, id);
  const itm = products.find((prod) => prod.id === Number(id));

  return (
    <div className="description">
      <div className="description__wrap" key={itm.id}>
        <div className="description__img-wrap">
          <img src={itm.img} alt="descript-img" />
        </div>
        <div className="description__content">
          <h2 className="description__title">{itm.name}</h2>

          <div className="description__price-wrap">
            <p className="description__price">
              {itm.discount ? itm.price * itm.discount : itm.price}$
            </p>
            <p className="description__discount">
              {itm.discount ? `${itm.price}$` : null}
            </p>
          </div>

          <p className="description__descript">{itm.description}</p>

          <div className="description__nav">
            <Button
              id={itm.id}
              basketClick={rest.basketClick}
              basketProduct={rest.basketProducts.includes(itm.id)}
            />
            <Like
              id={itm.id}
              likeClick={rest.likeClick}
              likeProduct={rest.likeProducts.includes(itm.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
