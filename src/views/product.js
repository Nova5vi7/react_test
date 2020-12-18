import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import actions from "../store/actions";
import featchData from "../helpers/featch-data";
import Description from "../components/Description";

function Product({
  addFavorite,
  deleteFavorite,
  products,
  favorites,
  setProducts,
}) {
  useEffect(() => {
    if (!Boolean(products.length)) {
      featchData(setProducts);
    }
  }, [products.length, setProducts]);

  const handleLikeClick = useCallback(
    (id) => {
      if (favorites.includes(id)) {
        deleteFavorite(id);
      } else {
        addFavorite(id);
      }
    },
    [favorites, deleteFavorite, addFavorite]
  );

  if (!products.length) {
    return "loading";
  }

  return (
    <Description
      products={products}
      likeClick={handleLikeClick}
      likeProducts={favorites}
      basketProducts={[]}
    />
  );
}

const mapDispatchToProps = (dispatch) => ({
  setProducts: (products) => {
    dispatch(actions.setProducts(products));
  },
  addFavorite: (id) => {
    dispatch(actions.addToFavorite(id));
  },
  deleteFavorite: (id) => {
    dispatch(actions.deleteFavorite(id));
  },
});

const mapStateToProps = ({ products, favorites }) => ({
  products,
  favorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
