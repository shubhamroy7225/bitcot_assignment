import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/Store";
import Login from "./components/Login/LoginForm";
import DashBoard from "./components/Dashboard/Dashboard";
import Home from "./components/Root/HomePage";
import UserDetails from "./components/User/Users";
import Header from "./components/Header/Header";
import ProtectedRoute from "./components/Route/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      {window.location.pathname === "/login" ? (
        <Redirect to="/login" />
      ) : (
        <Header />
      )}
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/dashboard" component={DashBoard} />
            <ProtectedRoute exact path="/userdetails" component={UserDetails} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
