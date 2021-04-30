import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from "axios"
import { Alert } from 'react-native'

//actions 
export const onUserLogin = (email, password) => {
    return async (dispatch) => {
        try {

            const response = await axios.post("URL", {email, password})
            dispatch({type : "DO_LOGIN", payload : response.data})

        } catch(error) {
            dispatch({type : "ON_ERROR", payload : error})
        }        
    }
}
export const onFetchRestaurant = () => {
    return async (dispatch) => {
        try {
            const response2 = await axios.get("http://192.168.1.101:8080/api/v1/restaurant/")
            

            // const response = {
            //     data : [
            //     {name : 'Macbook Pro', price : "$1"},
            //     {name : 'IPhone', price : "$2"},
            //     {name : 'Samsung', price : "$3"}
            // ]}
            dispatch({type : "FETCH_PRODUCTS", payload : response2.data})
            
        } catch(error) {
            dispatch({type : "ON_ERROR", payload : error})
        }        
    }
}

//reducers

const userReducer = (state = {}, action) => {
    switch(action.type) {
        case 'DO_LOGIN':
            return {
                ...state,
                user : action.payload
            }
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products : action.payload
            }
        case 'ON_ERROR':
            return {
                ...state,
                appError : action.payload
            }
        default:
            return state;
    }
}

//root reducer
export const rootReducer = combineReducers({
    userReducer
})

//store
export const store = createStore(rootReducer, applyMiddleware(thunk));
