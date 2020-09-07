import React from "react";
import "../styles/App.scss";
import Card from "./Card";

function Cards({ ...rest }) {
  return (
    <div className="cards">
      <h1 className="cards__title">Products</h1>
      <div className="cards__wrap">
        {rest.products.map((itm) => {
          return (
            <Card
              product={[itm]}
              key={itm.id}
              likeClick={rest.likeClick}
              likeProducts={rest.likeProducts}
              basketClick={rest.basketClick}
              basketProducts={rest.basketProducts}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
