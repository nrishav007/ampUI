import * as types from "./ActionTypes";
const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  token:""
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SIGNIN_REQUEST:{
      return { ...state, isLoading: true, isError: false };
    }
    case types.SIGNIN_SUCCESS: {
      return { ...state,user:payload.data.user,token:payload.data.token, isLoading: false, isError: false };
    }
    case types.SIGNIN_FAILURE: {
      return { ...state, user:{},token:"", isLoading: false, isError: true };
    }

    case types.SIGNOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.SIGNOUT_SUCCESS:{
      return { ...state,user:{},token:"", isLoading: false, isError: false };
    }
    case types.SIGNOUT_FAILURE: {
      return { ...state,user:{},token:"", isLoading: false, isError: true };
    }

    default:
      return state;
  }
};