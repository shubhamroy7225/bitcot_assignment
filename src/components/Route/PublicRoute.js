import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
const PublicRoute = ({ component: Component }) => {
  return (
    <Route
      component={(props) => (
        <div>
          <Header />
          <Component {...props} />
        </div>
      )}
    />
  );
};
export default PublicRoute;
