import axios from "axios";
import * as types from "./ActionTypes";
export const login = (payload, toast, navigate) => (dispatch) => {
  dispatch({ type: types.SIGNIN_REQUEST });
  return axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/login-user`, payload)
    .then((res) => {
      dispatch({ type: types.SIGNIN_SUCCESS, payload: res.data });
      toast({
        title: res.data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      if(res.data.data.user.userType==="dj"){
        navigate("/dj")
      }
      else{
        navigate("/user")
      }
    })
    .catch((err) => {
      dispatch({ type: types.SIGNIN_FAILURE });
      toast({
        title: err.response.data.error,
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
    localStorage.removeItem("amp");
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
export const profileUpdate=(token,toast)=>(dispatch)=>{
  dispatch({ type: types.UPDATE_PROFILE_REQUEST });
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/api/user/get-user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((rest) => {
      let pload=rest.data.data.user;
          dispatch({ type: types.UPDATE_PROFILE_SUCCESS,payload:pload });
          toast({
            title: rest.data.message,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_PROFILE_FAILURE });
      toast({
        title: err.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
}