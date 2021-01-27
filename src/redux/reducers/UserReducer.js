import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  UPDATE_USER_SUCCCESS,
  DELETE_USER_SUCCCESS,
} from "../index";
const initialState = {
  isLoading: false,
  usersData: [],
  IsError: "",
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        isLoading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        isLoading: false,
        usersData: action.payload,
        IsError: "",
      };

    case GET_USERS_ERROR:
      return {
        isLoading: false,
        usersData: [],
        IsError: action.payload,
      };
    case UPDATE_USER_SUCCCESS:
      let elementsIndex = state.usersData.findIndex(
        (item) => item.id === action.payload.id
      );
      let newArray = [...state.usersData];
      newArray[elementsIndex] = action.payload;
      return {
        usersData: newArray,
      };
    case DELETE_USER_SUCCCESS:
      let Index = state.usersData.findIndex(
        (item) => item.id === action.payload
      );
      let array = [...state.usersData];
      array.splice(Index, 1);
      return{
        usersData:array
      }

    default:
      return state;
  }
};
export default usersReducer;
