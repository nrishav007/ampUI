import axios from "axios";
import * as types from "./ActionTypes";

const deleteProduct = (payload, toast, token) => (dispatch) => {
  console.log("from delete", payload);
  dispatch({ type: types.DELETE_PRODUCT_REQUEST });
  axios
    .delete(
      `${
        process.env.REACT_APP_BACKEND_URL
      }/product/delete?sku=${payload.products.join(",")}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch({ type: types.DELETE_PRODUCT_SUCCESS });
      toast({
        title: res.data.msg,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_PRODUCT_FAILURE });
      toast({
        title: err.response.data.msg,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};
const themeChanger = (payload) => (dispatch) => {
  dispatch({ type: types.THEME_CHANGE, payload });
};
export { deleteProduct, themeChanger };
