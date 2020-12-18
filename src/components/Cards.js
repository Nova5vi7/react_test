import React from "react";
import Card from "./Card";

function Cards({
  products,
  likeClick,
  likeProducts,
  basketClick,
  basketProducts,
}) {
  return (
    <div className="cards">
      <h1 className="cards__title">Products</h1>
      <div className="cards__wrap">
        {products.map((itm) => {
          return (
            <Card
              product={itm}
              key={itm.id}
              likeClick={likeClick}
              likeProducts={likeProducts}
              basketClick={basketClick}
              basketProducts={basketProducts}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
