import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import products from "./products";
import favorites from "./favorites";
import dropdownIsVisible from "./dropdown-is-visible";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    products,
    favorites,
    dropdownIsVisible,
  });

export default createRootReducer;
