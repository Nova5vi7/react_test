import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const Router = () => {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} component={component} />
      ))}
    </Switch>
  );
};

export default Router;
