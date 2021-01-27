import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../../css/Form.css';
function Form(props) {
  const [form, setForm] = useState(props.userData);
  const onChangeFormDate = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.update(form);
    props.onClose();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-containetr">
        <AccountCircleIcon style={{ fontSize: 40}}/>
        <h3>User Form</h3>
        <br/>
      
        <TextField
          id="user-name"
          label="User Name"
          type="text"
          name="username"
          value={form.username}
          onChange={onChangeFormDate}
        />
        <br />
        <TextField
          id="user-address"
          label="User Address"
          type="text"
          name="address"
          value={form.address.street}
          onChange={onChangeFormDate}
        />
        <br />
        <TextField
          id="company"
          label="Company"
          type="text"
          name="company"
          value={form.company.name}
          onChange={onChangeFormDate}
        />
        <br />
        <TextField
          id="user-email"
          label="User Email"
          type="text"
          name="email"
          value={form.email}
          onChange={onChangeFormDate}
        />
        <br />
        <TextField
          id="phone"
          label="Mobile Number"
          type="text"
          name="phone"
          value={form.phone}
          onChange={onChangeFormDate}
        />
        <br />
        <TextField
          id="name"
          label="name"
          type="text"
          name="name"
          value={form.name}
          onChange={onChangeFormDate}
        />
        <br />
        <TextField
          id="website"
          label="Website"
          type="text"
          name="website"
          value={form.website}
          onChange={onChangeFormDate}
        />
        <br />
        <br/>
        
        <Button variant="contained" color="secondary" type="submit" >
          Updete
        </Button>
      </form>
    </div>
  );
}
export default Form;
