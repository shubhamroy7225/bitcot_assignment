import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import Table from "react-bootstrap/Table";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Header from "../Header/Header";

let UserDataHooks = (props) => {
  const [userData, getUserData] = useState([]);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const onOpenModal = () => {
    setOpen(true);

    const setUser = (user) => {
      setUser({ ...user });
    };
  };
  const onCloseModal = () => setOpen(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        getUserData(data);
      })
      .catch((err) => {
        setError("Fetching data failed!");
      });
  }, []);
  const updateUser = (formData) => {
    let elementsIndex = userData.findIndex((item) => item.id === user.id);
    let newArray = [...userData];
    newArray[elementsIndex] = formData;
    getUserData(newArray);
  };

  const deleteUserData = (user) => {
    let elementsIndex = userData.findIndex((item) => item.id === user.id);
    let newArray = [...userData];
    newArray.splice(elementsIndex, 1);
    getUserData(newArray);
  };

  if (error !== "") {
    return <p>ERROR: {error}</p>;
  }
  return (
    <>
      <div>
        <Header />
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
            {userData.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.address.street}</td>
                <td>{user.company.bs}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.website}</td>
                <button  onClick={() => onOpenModal(setUser(user))}  >
                  <EditIcon/>
                </button>{"   "}
                <button onClick={() => deleteUserData(user)} variant="danger">
                  <DeleteIcon/>
                </button>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal open={open} onClose={onCloseModal} center>
          <Form
            key={user.id}
            userData={user}
            usersData={userData}
            updateUser={updateUser}
            onClose={onCloseModal}
          />
        </Modal>
      </div>
    </>
  );
};
export default UserDataHooks;
