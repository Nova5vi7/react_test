import actionTypes from "../actions/action-types";

const dropdown = (state = false, action) => {
  console.log(state);
  switch (action.type) {
    case actionTypes.DROPDOWN_VISIBLE:
      return {
        ...state,
        dropdown: true,
      };

    default:
      return state;
  }
};

export default dropdown;
