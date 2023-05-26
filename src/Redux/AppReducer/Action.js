import axios from "axios";
import * as types from "./ActionTypes";

const getProduct = (toast) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/product`)
    .then((res) => {
      dispatch({ type: types.GET_PRODUCTS_SUCCESS,payload:res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PRODUCTS_FAILURE });
      toast({
        title: err.response.data.msg,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
  
};
const deleteProduct = (payload, toast,token) => (dispatch) => {
  console.log("from delete",payload)
  dispatch({ type: types.DELETE_PRODUCT_REQUEST });
  axios
    .delete(`${process.env.REACT_APP_BACKEND_URL}/product/delete?sku=${payload.products.join(",")}`,{headers: {
      Authorization: `Bearer ${token}`,
    }})
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
const updateProduct = (payload, toast,skuID,token) => (dispatch) => {
  dispatch({ type: types.UPDATE_PRODUCT_REQUEST });
  axios
    .patch(`${process.env.REACT_APP_BACKEND_URL}/product/update/${skuID}`,payload,{
      headers: {
        Authorization: `Bearer ${token}`,
      }
  })
    .then((res) => {
      dispatch({ type: types.UPDATE_PRODUCT_SUCCESS });
      toast({
        title: res.data.msg,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    })
    .catch((err) => {
      dispatch({ type: types.UPDATE_PRODUCT_FAILURE });
      toast({
        title: err.response.data.msg,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};
const getHomeData=(token)=>(dispatch)=>{
  dispatch({ type: types.GET_HOME_REQUEST });
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin`)
  .then((res)=>{
    dispatch({ type: types.GET_HOME_SUCCESS,payload:res.data });
  })
  .catch((err)=>{
    console.log(err)
    dispatch({ type: types.GET_HOME_FAILURE });
  })
}
const getWish=(token)=>(dispatch)=>{
  dispatch({type:types.GET_WISH_REQUEST});
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/wish`,{
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  .then((res)=>{
    dispatch({type:types.GET_WISH_SUCCESS,payload:res.data.data});
  })
  .catch((err)=>{
    console.log(err);
    dispatch({type:types.GET_WISH_FAILURE});

  })
}
const wipeWish=()=>(dispatch)=>{
  dispatch({type:types.WIPE_WISH_SUCCESS})
}
export { getProduct, deleteProduct,updateProduct,getHomeData,getWish,wipeWish };
