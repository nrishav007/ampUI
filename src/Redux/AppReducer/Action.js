import axios from "axios";
import * as types from "./ActionTypes";

const getDJMessageList =
  (payload, toast, token, type = "dj") =>
  (dispatch) => {
    dispatch({ type: types.GET_DJMESSAGELIST_REQUEST });
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/message/get-${type}-message-list/${payload.id}`,
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

const getDJBookingList = (token, toast) => (dispatch) => {
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
          let pload = rest.data.data.booking.concat(res.data.data.booking);
          dispatch({ type: types.GET_DJBOOKINGLIST_SUCCESS, payload: pload });
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
const UserMenuChanger = (payload) => (dispatch) => {
  dispatch({ type: types.USER_MENU, payload });
};
const getUserDJList = (token, toast) => (dispatch) => {
  dispatch({ type: types.GET_USERDJLIST_REQUEST });
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/api/user/get-all-dj`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_USERDJLIST_SUCCESS,
        payload: res.data.data.dj,
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
const getUserDJSearchList = (payload, token, toast) => (dispatch) => {
  dispatch({ type: types.GET_USERDJLIST_REQUEST });
  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/search-dj`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({
        type: types.GET_USERDJLIST_SUCCESS,
        payload: res.data.data.dj,
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
const getUserBookingList = (token, toast) => (dispatch) => {
  dispatch({ type: types.GET_USERBOOKINGLIST_REQUEST });
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/api/booking/get-user-booking`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((rest) => {
      let pload = rest.data.data.booking;
      dispatch({ type: types.GET_USERBOOKINGLIST_SUCCESS, payload: pload });
    })
    .catch((err) => {
      dispatch({ type: types.GET_USERBOOKINGLIST_FAILURE });
      toast({
        title: err.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};

const userSingleDJ = (id, token) => (dispatch) => {
  dispatch({ type: types.SINGLE_DJ, payload: {} });
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/api/user/get-dj-detail/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: types.SINGLE_DJ, payload: res.data.data.dj });
    });
};
const bookingDate=(date)=>(dispatch)=>{
  dispatch({ type: types.BOOKING_DAY, payload: {date:date} });
}
export {
  bookingDate,
  getDJMessageList,
  userSingleDJ,
  themeChanger,
  getDJBookingList,
  getUserDJSearchList,
  DJMenuChanger,
  UserMenuChanger,
  getUserDJList,
  getUserBookingList,
};
