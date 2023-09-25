// imporrtation

import axios from 'axios'
import {  FAIL_USER, LOAD_USER, LOGIN_USER,CURRENT_USER, REGISTER_USER,GET_USER ,EDIT_USER,EDIT_USERPASSWORD,LOGOUT_USER, CLEAR_ERRORS, CLEAR_SUCCESS } from '../ActionsType/user'


// register user 

export const register = (newUser) => async (dispatch) => {
    dispatch ({type : LOAD_USER})
    try {
        let result = await axios.post("/api/User/register" , newUser)
        dispatch({type : REGISTER_USER , payload : result.data})
    } catch (error) {
        dispatch ({type : FAIL_USER , payload : error.response.data.errors})
        
    }
}
export const login = (user) => async (dispatch) => {
    dispatch ({type : LOAD_USER})
    
    try {
        let result = await axios.post("/api/User/login" , user)
        dispatch ( { type : LOGIN_USER , payload : result.data})
        
    } catch (error) {

        dispatch ({type : FAIL_USER , payload : error.response.data.errors})
    }
}
export const current = () => async (dispatch) => {
    dispatch ({ type : LOAD_USER})
    
    try {
     const config = {
         headers : {
             authorization : localStorage.getItem("token")
         }
     }
     let result = await axios.get("/api/User/current" , config)
     dispatch ({ type : CURRENT_USER , payload : result.data})
    } catch (error) {
        dispatch ({type : FAIL_USER , payload : error.response.data.errors})
        
    }}
export const edituser = (id, newUser) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      const result = await axios.put(`/api/User/${id}`, newUser);
      dispatch({ type: EDIT_USER, payload: result.data });
      
      window.location.reload();// Reload the page
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };
export const edituserpassword = (id,newUser)=> async (dispatch) =>{
    dispatch ({type : LOAD_USER})
  try {
     let result = await axios.put(`/api/User/password/${id}`,newUser)
      dispatch ({ type : EDIT_USERPASSWORD , payload : result.data})
  } catch (error) {
    dispatch ({type : FAIL_USER , payload : error.response.data.errors})
  }
}

export const getUser =(id)=> async (dispatch) =>{
    dispatch ({type : LOAD_USER})

    try {
        let result = await axios.get(`/api/User/${id}`)
        dispatch ({ type : GET_USER , payload : result.data.userToGet })
        
    } catch (error) {
        dispatch ({type : FAIL_USER , payload : error.response.data.errors})
        
    }
}




export const logout = () => async (dispatch) => {
    dispatch ({ type : LOGOUT_USER})

}







export const clearErrors = () => {
    return {
        type : CLEAR_ERRORS
    }
}


export const  clearSuccess = () => {
    return {
        type : CLEAR_SUCCESS
    }
}


