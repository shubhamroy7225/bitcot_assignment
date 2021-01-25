import React from "react";
import Button from "react-bootstrap/Button";
const LogOut = (props) => {
  const logoutUser = () => {
    localStorage.removeItem("token");
    return  window.location.href = '/';
  };
  return <Button onClick={logoutUser}>Logout</Button>;
};
export default LogOut;
