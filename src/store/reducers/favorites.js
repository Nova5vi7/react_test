import actionTypes from "../actions/action-types";

const favorites = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_FAVORITE:
      return [...state, action.payload.productId];

    case actionTypes.DELETE_FAVORITE:
      const newState = state.filter((id) => id !== action.payload.productId);
      return [...newState];

    default:
      return state;
  }
};

export default favorites;
