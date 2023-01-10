import axios from "axios";
import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./Action.type";

export const GetData = () => (dispatch) => {
//   dispatch({ type: GET_REQUEST });
  return axios
    .get(`https://first-api-mock.onrender.com/dogs`)
    .then((res) => {
      dispatch({ type: GET_SUCCESS, payload: res.data });
    //   console.log(res)
    })
    .catch((err) => {
      dispatch({ type: GET_FAILURE});
    });
};