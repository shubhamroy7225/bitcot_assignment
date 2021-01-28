import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/Store";
import Login from "./components/Login/LoginForm";
import PublicRoute from "./components/Route/PublicRoute";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import LoginRoute from "./components/Route/LoginRoute";
import DashBoard from "./components/Dashboard/Dashboard";
import Home from "./components/Root/HomePage";
import UserDetails from "./components/User/Users";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Switch>
           < PublicRoute Route  path="/" exact component={Home} />
            <LoginRoute exact path="/login" component={Login} />
            <ProtectedRoute exact path="/dashboard" component={DashBoard} />
            <ProtectedRoute exact path="/userdetails" component={UserDetails} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
