import axios from "axios";
import * as types from "./ActionTypes";
export const signin = (payload, toast, onClose, navigate) => (dispatch) => {
  dispatch({ type: types.SIGNIN_REQUEST });
  return axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/signin`, payload)
    .then((res) => {
      dispatch({ type: types.SIGNIN_SUCCESS, payload: res.data });
      toast({
        title: res.data.msg,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      if (res.data.user.administration) {
        onClose();
        navigate("/admin");
      } else {
        onClose();
      }
    })
    .catch((err) => {
      dispatch({ type: types.SIGNIN_FAILURE });
      toast({
        title: err.response.data.msg,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};
export const signup = (payload, toast) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  return axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, payload)
    .then((res) => {
      dispatch({ type: types.SIGNUP_SUCCESS });
      toast({
        title: res.data.msg,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    })
    .catch((err) => {
      dispatch({ type: types.SIGNUP_FAILURE });
      toast({
        title: err.response.data.msg,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};
export const logout = (toast) => (dispatch) => {
  try {
    dispatch({ type: types.SIGNOUT_REQUEST });
    dispatch({ type: types.SIGNOUT_SUCCESS });
    toast({
      title: "Account Logout",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  } catch (error) {
    dispatch({ type: types.SIGNOUT_FAILURE });
  }
};
