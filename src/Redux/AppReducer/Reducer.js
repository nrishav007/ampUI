import * as types from "./ActionTypes";
const initialState = {
  djMenu: "Home",
  userMenu: "Home",
  isLoading: false,
  isError: false,
  theme: "light",
  date:"",
  djDMs: [],
  djBook:[],
  userBook:[],
  userDJList:[],
  singleDJ:{}
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_DJMESSAGELIST_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case types.GET_DJMESSAGELIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        djDMs: payload,
        isError: false,
      };
    }
    case types.GET_DJMESSAGELIST_FAILURE: {
      return { ...state, djDMs: [], isLoading: false, isError: true };
    }

    case types.GET_DJBOOKINGLIST_REQUEST: {
      return { ...state, isLoading: true,djBook:[], isError: false };
    }
    case types.GET_DJBOOKINGLIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        djBook: payload,
        isError: false,
      };
    }
    case types.GET_DJBOOKINGLIST_FAILURE: {
      return { ...state, djBook: [], isLoading: false, isError: true };
    }

    case types.THEME_CHANGE: {
      return { ...state, theme: payload.theme };
    }

    case types.DJ_MENU: {
      return { ...state, djMenu: payload.name };
    }

    case types.USER_MENU: {
      return { ...state, userMenu: payload.name };
    }

    case types.GET_USERDJLIST_FAILURE: {
      return { ...state, userDJList: [], isLoading: false, isError: true };
    }

    case types.GET_USERDJLIST_REQUEST: {
      return { ...state, isLoading: true,userDJList:[], isError: false };
    }
    case types.GET_USERDJLIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userDJList: payload,
        isError: false,
      };
    }

    case types.GET_USERBOOKINGLIST_REQUEST: {
      return { ...state, isLoading: true,userBook:[], isError: false };
    }
    case types.GET_USERBOOKINGLIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userBook: payload,
        isError: false,
      };
    }
    case types.GET_USERBOOKINGLIST_FAILURE: {
      return { ...state, userBook: [], isLoading: false, isError: true };
    }
    case types.SINGLE_DJ:{
      return {
        ...state,
        singleDJ:payload
      }
    }
    case types.BOOKING_DAY:{
      return{
        ...state,
        date:payload.date
      }
    }
    default:
      return state;
  }
};
