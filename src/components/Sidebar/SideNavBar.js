import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import LogOut from "../Logout/LogOut";
import "../../css/SideNavBar.css";
const SideNavBar = () => {
  return (
    <Menu>
      <hr/>
      <Link to="/dashboard"><DashboardIcon/>{'   '}DashBoard</Link>
      <hr />
      <Link to="/userdetails"><PersonIcon/>{'   '}UserDetails</Link>
      <hr />
      <LogOut />
    </Menu>
  );
};
export default SideNavBar;
