import React from "react";
import { Route, Switch } from "react-router-dom";

function Router({ path, render }) {
  return (
    <Switch>
      <Route path={path} exact render={render} />
    </Switch>
  );
}

export default Router;
