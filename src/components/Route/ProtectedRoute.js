import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component: Component }) => {
  const token = localStorage.token;
  return (
    <Route
      render={() => {
        if (token) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
