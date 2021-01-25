import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Form, Button, FormControl } from "react-bootstrap";
import SideNavBar from "../Sidebar/SideNavBar";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import "../../css/LoginForm.css";
const Header = () => {
  return (
    <Navbar className='color-nav'>
      <Navbar.Brand className='sidebar_container'>
        <SideNavBar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      <Form inline>
      <Button variant="outline-light" className="mr-sm-2"><LockOpenIcon/>Login</Button>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
};
export default Header;
