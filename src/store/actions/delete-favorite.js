import actionTypes from "./action-types";

const deleteFavorite = (productId) => ({
  type: actionTypes.DELETE_FAVORITE,
  payload: {
    productId,
  },
});

export default deleteFavorite;
