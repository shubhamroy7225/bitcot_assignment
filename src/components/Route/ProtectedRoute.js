import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../Header/Header";
const ProtectedRoute = ({ component: Component }) => {
  const token = localStorage.token;
  return (
    <Route
      render={() => {
        if (token) {
          return(<div><Header/><Component /></div>);
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
