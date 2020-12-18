import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store/configureStore";
import store from "./store";

import Header from "./components/Header";
import Router from "./router";

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Header />
        <Router />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
