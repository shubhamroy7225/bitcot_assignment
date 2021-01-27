import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { getAllUsers } from "../../redux/apis/Users";
import { updateUser, deleteUserData } from "../../redux/actions/UserActions";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Modal } from "react-responsive-modal";
import Form from "../Form/Form";
import "react-responsive-modal/styles.css";
const Users = (props) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);

  const data = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  const onOpenModal = () => {
    setOpen(true);
    const setUser = (user) => {
      setUser({ ...user });
    };
  };
  const onCloseModal = () => setOpen(false);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const updateUserData = (formData) => {
    dispatch(updateUser(formData));
  };
  const deleteUser = (user) => {
    dispatch(deleteUserData(user.id));
  };

  console.log(data);
  return (
    <>
      <div>
        <Table>
          <thead className="table">
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>User Address</th>
              <th>Company</th>
              <th>User Email</th>
              <th>Phone</th>
              <th>User Name</th>
              <th>Website</th>
              <th>Operation</th>
            </tr>
          </thead>

          <tbody>
            {data.usersData.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.address.street}</td>
                <td>{user.company.bs}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.website}</td>
                <button onClick={() => onOpenModal(setUser(user))}>
                  <EditIcon />
                </button>
                {"  "}
                <button onClick={() => deleteUser(user)} variant="danger">
                  <DeleteIcon />
                </button>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal open={open} onClose={onCloseModal} center>
          <Form
            key={user.id}
            userData={user}
            usersData={data}
            update={updateUserData}
            onClose={onCloseModal}
          />
        </Modal>
      </div>
    </>
  );
};
export default Users;
