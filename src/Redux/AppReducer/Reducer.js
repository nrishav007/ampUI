import * as types from "./ActionTypes";
const initialState = {
  isLoading:false,
  isError: false,
  theme:"light"
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCTS_REQUEST: {
      return { ...state, products: [], isProductLoading: true, isError: false };
    }
    case types.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isProductLoading: false,
        products: payload,
        isError: false,
      };
    }
    case types.THEME_CHANGE: {
      return { ...state, theme:payload.theme };
    }

    default:
      return state;
  }
};
