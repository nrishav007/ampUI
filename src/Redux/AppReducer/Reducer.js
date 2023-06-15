import * as types from "./ActionTypes";
const initialState = {
  djMenu:"Home",
  isLoading:false,
  isError: false,
  theme:"light",
  djDMs:[]
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

    case types.THEME_CHANGE: {
      return { ...state, theme:payload.theme };
    }

    case types.DJ_MENU:{
      return { ...state, djMenu:payload.name };
    }
    default:
      return state;
  }
};
