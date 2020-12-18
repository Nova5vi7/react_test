import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Cards from "../components/Cards";
import actions from "../store/actions";
import featchData from "../helpers/featch-data";

const ProductsPage = ({
  setProducts,
  addFavorite,
  deleteFavorite,
  products,
  favorites,
}) => {
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

  return (
    <Cards
      products={products}
      likeClick={handleLikeClick}
      likeProducts={favorites}
      basketProducts={[]}
    />
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
