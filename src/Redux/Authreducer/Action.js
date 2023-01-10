import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./Action_Type"



export const logindata = (data) => dispatch => {
    dispatch({ type: LOGIN_REQUEST })
    axios.post("https://reqres.in/api/login",data)
      .then((response) => {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data})
        // console.log(response)
      }).catch((e) => {
        dispatch({ type: LOGIN_FAILURE })
        // console.log(e)
        alert('failed')
      })
  }