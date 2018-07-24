import {LOGIN_USER, SIGN_OUT_USER  } from 'authConstants'
import {createReducer } from '../../app/common/util/reducerUtil'


const initialState = {
    currentUser:{}
}


export const loginUser =(state, payload) => {
    return{
        ...state, authenticate:true,
        currentUser: payload.creds.email
    }
}

export const signOutUser =(state, payload) => {
    return{
        ...state, authenticate:false,
        currentUser:{}
    }
}  

export default createReducer( initialState, {
   [LOGIN_USER] :loginUser,
   [SIGN_OUT_USER] :signOutUser
})