import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR,UPDATE_USER_SUCCCESS,DELETE_USER_SUCCCESS } from "../index";
export const getUsers = () => {
  return {
    type: GET_USERS,
  };
};
export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};
export const getUsersError = (error) => {
  return {
    type: GET_USERS_ERROR,
    payload: error,
  };
};
export const updateUser = (formData) => {
  return {
    type: UPDATE_USER_SUCCCESS,
    payload: formData,
  };
};
export const deleteUserData = (id) => {
  return {
    type: DELETE_USER_SUCCCESS,
    payload: id,
  };
};