import actionTypes from "./action-types";

const addFavorite = (productId) => ({
  type: actionTypes.ADD_FAVORITE,
  payload: {
    productId,
  },
});

export default addFavorite;
