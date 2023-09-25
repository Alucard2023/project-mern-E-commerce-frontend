import axios from 'axios'
import { LOAD_ADMIN,CLEAR_SUCCESSA,GET_ALLUSERS,GET_ADMIN, REGISTER_ADMIN,FAIL_ADMIN,CURRENT_ADMIN,CLEAR_ERRORSA,LOGOUT_ADMIN,LOGIN_ADMIN} from '../ActionsType/Admin'



export const registerAdmin = (newAdmin) => async (dispatch) => {
    dispatch ({type : LOAD_ADMIN})
    try {
        let result = await axios.post("/api/Admin/registerAdmin" , newAdmin)
        dispatch({type : REGISTER_ADMIN , payload : result.data})
    } catch (error) {
        dispatch ({type : FAIL_ADMIN , payload : error.response.data.errors})
        
    }
}


export const currentAdmin = () => async (dispatch) => {
    dispatch ({ type : LOAD_ADMIN})
    
    try {
     const config = {
         headers : {
             authorization : localStorage.getItem("token")       
         } 
     }
     
     let result = await axios.get("/api/Admin/currentAdmin" , config)
     dispatch ({ type : CURRENT_ADMIN , payload : result.data})
    } catch (error) {
        console.log(error)
        
    }
    
    }



export const loginAdmin = (admin) => async (dispatch) => {
    dispatch ({type : LOAD_ADMIN})
    
    try {
        let result = await axios.post("/api/Admin/LoginAdmin" , admin)
        dispatch ( { type : LOGIN_ADMIN , payload : result.data})
        
    } catch (error) {

        console.log(error)
    }
}
export const logoutAdmin = () => async (dispatch) => {
    dispatch ({ type : LOGOUT_ADMIN})
}

// admin.js
export const getAdmin = (id) => async (dispatch) => {
    dispatch({ type: LOAD_ADMIN }); // Use an appropriate loading action type

    try {
        const config = {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        };

        const result = await axios.get(`/api/Admin/${id}`, config); // Replace with your API endpoint for admin data
        dispatch({ type: GET_ADMIN, payload: result.data }); // Dispatch the admin data to the Redux store
    } catch (error) {
        dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
    }
};


export const getallusers = () => async (dispatch) => {
    dispatch ({type : LOAD_ADMIN})
    try {
        let result = await axios.get('/api/Admin/allusers')
        dispatch ({ type : GET_ALLUSERS, payload : result.data.listusers})
    } catch (error) {
        console.log(error)
    }
}



export const clearErrorsA = () => {
    return {
        type : CLEAR_ERRORSA
    }
}


export const  clearSuccessA = () => {
    return {
        type : CLEAR_SUCCESSA
    }
}