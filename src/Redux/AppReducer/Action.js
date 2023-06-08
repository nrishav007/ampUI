import axios from "axios";
import * as types from "./ActionTypes";

const getDJMessageList = (payload, toast, token) => (dispatch) => {
  dispatch({ type: types.GET_DJMESSAGELIST_REQUEST });
  axios
    .get(
      `${
        process.env.REACT_APP_BACKEND_URL
      }/api/message/get-dj-message-list/${payload.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch({ type: types.GET_DJMESSAGELIST_SUCCESS,payload:res.data.data.messageList });
      
    })
    .catch((err) => {
      dispatch({ type: types.GET_DJMESSAGELIST_FAILURE });
      toast({
        title: err.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};
const themeChanger = (payload) => (dispatch) => {
  dispatch({ type: types.THEME_CHANGE, payload });
};
export { getDJMessageList, themeChanger };
