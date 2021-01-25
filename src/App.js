import UserDataHooks from "./components/User/UserDataHooks";
import Home from "./components/Root/HomePage";
import Login from "./components/Login/LoginForm";
import DashBoard from "./components/Dashboard/Dashboard";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute exact path="/dashboard" component={DashBoard} />
          <ProtectedRoute exact path="/userdetails" component={UserDataHooks} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
