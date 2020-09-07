import React from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import Like from "./Like";

function Description({ match, ...rest }) {
  let { id } = useParams();

  return (
    <div className="description">
      {rest.products
        .filter((itm) => {
          return itm.id === Number(id);
        })
        .map((itm) => {
          return (
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
                    basketProduct={rest.basketProducts.includes(String(itm.id))}
                  />
                  <Like
                    id={itm.id}
                    likeClick={rest.likeClick}
                    likeProduct={rest.likeProducts.includes(String(itm.id))}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Description;
