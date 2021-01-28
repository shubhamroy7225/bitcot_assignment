import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { green } from "@material-ui/core/colors";
import "../../css/LoginForm.css";
export default function Login(props) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const onChangeFormData = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = form;
    const { history } = props;
    if (email === "" || password === "") {
      setError("please put the user details");
    } else {
      localStorage.setItem("token", JSON.stringify(form));
      history.push("/");
    }
  };
  return (
    <div className="Login">
      <LockOpenIcon style={{ color: green[500], fontSize: 40 }} />
      <h2>Log in to your account</h2>
      <br />
      <br />
      <form onSubmit={handleSubmit} className="formcontainer">
        <TextField
          id="email"
          label="User Email"
          type="text"
          name="email"
          value={form.email}
          onChange={onChangeFormData}
        />
        <br />
        <br />
        <TextField
          id="password"
          label="User Password"
          type="text"
          name="password"
          value={form.password}
          onChange={onChangeFormData}
        />
        <br />
        <br />
        <Button variant="contained" color="secondary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
