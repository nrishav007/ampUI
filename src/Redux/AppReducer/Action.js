import axios from "axios";
import * as types from "./ActionTypes";

const getDJMessageList = (payload, toast, token) => (dispatch) => {
  dispatch({ type: types.GET_DJMESSAGELIST_REQUEST });
  axios
    .get(
      `${process.env.REACT_APP_BACKEND_URL}/api/message/get-dj-message-list/${payload.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch({
        type: types.GET_DJMESSAGELIST_SUCCESS,
        payload: res.data.data.messageList,
      });
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

const getDJBookingList = (token,toast) => (dispatch) => {
  dispatch({ type: types.GET_DJBOOKINGLIST_REQUEST });
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/api/booking/accept-booking`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((rest) => {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}/api/booking/pending-decline-booking`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          let pload=rest.data.data.booking.concat(res.data.data.booking)
          dispatch({ type: types.GET_DJBOOKINGLIST_SUCCESS,payload:pload });
        })
        .catch((err) => {
          dispatch({ type: types.GET_DJBOOKINGLIST_FAILURE });
          toast({
            title: err.response.data.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    })
    .catch((err) => {
      dispatch({ type: types.GET_DJBOOKINGLIST_FAILURE });
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

const DJMenuChanger = (payload) => (dispatch) => {
  dispatch({ type: types.DJ_MENU, payload });
};
export { getDJMessageList, themeChanger, getDJBookingList, DJMenuChanger };
