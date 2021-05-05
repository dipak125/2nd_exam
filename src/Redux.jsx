import React from "react";
import {combineReducers,createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import axios from "axios";

const initial={
    name:"",
    email:"",
    password:"",
    role:""
}
const RegReducer=(state=initial,action)=>{
            switch(action.type)
            {
                case "name": return{
                        ...state,
                        name:action.payload
                }
                case "email": return{
                        ...state,
                        email:action.payload,
                }
                case "password": return{
                    ...state,
                    password:action.payload
                }
                case "role": return{
                    ...state,
                    role:action.payload
                }
                default: return state
            }
}
const DataReducer=(state=[],action)=>{
            switch(action.type)
            {
                case "FETCH": return action.payload
                default: return state
            }
            
}

const rootReducer=combineReducers({
    Reg: RegReducer,
    Data: DataReducer
})
export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

const getData=(payload)=>{
    return{
        type: "FETCH",
        payload
    }
}
export const getFetch=()=>{
    return(dispatch)=>{
        axios.get("http://localhost:4000/students").then(res=>{
            dispatch(getData(res.data))
        })
    }
}
export const Name=(value)=>{
    return{
        type:"name",
        payload:value
    }
}
export const Email=(value)=>{
    return{
        type: "email",
        payload:value
    }
}
export const Pass=(value)=>{
        return{
            type:"password",
            payload:value
        }
}
export const Role=(value)=>{
    return{
        type:"role",
        payload:value
    }
}
