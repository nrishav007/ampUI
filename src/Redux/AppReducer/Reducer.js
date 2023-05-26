import * as types from "./ActionTypes";
const initialState = {
  products: [],
  home: [],
  wish:[],
  isCartLoading:false,
  isProductLoading: false,
  isProductUpdateLoading: false,
  isHomeLoading: false,
  isDeleteProductLoading: false,
  isDiscountLoading: false,
  isError: false,
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
    case types.GET_PRODUCTS_FAILURE: {
      return { ...state, isProductLoading: false, products: [], isError: true };
    }

    case types.DELETE_PRODUCT_REQUEST: {
      return { ...state, isDeleteProduct: true };
    }

    case types.DELETE_PRODUCT_SUCCESS: {
      return { ...state, isDeleteProduct: false };
    }
    case types.DELETE_PRODUCT_FAILURE: {
      return { ...state, isError: true };
    }

    case types.UPDATE_DISCOUNT_REQUEST: {
      return { ...state, isDiscountLoading: true };
    }
    case types.UPDATE_DISCOUNT_SUCCESS: {
      return { ...state, isDiscountLoading: false };
    }
    case types.UPDATE_DISCOUNT_FAILURE: {
      return { ...state, isError: true };
    }

    case types.GET_HOME_REQUEST: {
      return {
        ...state,
        products: [],
        home: [],
        isHomeLoading: true,
        isError: false,
      };
    }
    case types.GET_HOME_SUCCESS: {
      return {
        ...state,
        isHomeLoading: false,
        home: payload,
        isError: false,
      };
    }
    case types.GET_HOME_FAILURE: {
      return {
        ...state,
        products: [],
        home: [],
        isProductLoading: false,
        isError: true,
      };
    }

    case types.UPDATE_PRODUCT_REQUEST: {
      return {
        ...state,
        products: [],
        isProductUpdateLoading: true,
        isError: false,
      };
    }
    case types.UPDATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        isProductUpdateLoading: false,
        products: payload,
        isError: false,
      };
    }
    case types.UPDATE_PRODUCT_FAILURE: {
      return {
        ...state,
        isProductUpdateLoading: false,
        products: [],
        isError: true,
      };
    }

    case types.GET_WISH_REQUEST: {
      return {
        ...state,
        wish: [],
        isCartLoading: true,
        isError: false,
      };
    }
    case types.GET_WISH_SUCCESS: {
      return {
        ...state,
        isCartLoading: false,
        wish: payload,
        isError: false,
      };
    }
    case types.GET_WISH_FAILURE: {
      return {
        ...state,
        isCartLoading: false,
        wish: [],
        isError: true,
      };
    }

    case types.WIPE_WISH_SUCCESS: {
      return {
        ...state,
        wish: [],
      };
    }
    default:
      return state;
  }
};
