import { combineReducers } from "@reduxjs/toolkit"

const defaultstate={
    products:[],
   cart:[] 
}

export const cartReducer=(state=defaultstate,action)=>{
     switch (action.type) {
        case "ADD_PRODUCT":
            let addcart=[...state.cart]
                  addcart.push(action.payload)
                  return {...state,cart:addcart}
        case "REMOVE_PRODUCT":
            let removeddata=state.cart.filter(ele=> ele.id !== action.payload )          
              return {...state,cart:removeddata}
        default:
            return state
     }
}

export const productReducer=(state=defaultstate,action)=>{
    switch (action.type) {
       case "GET_PRODUCTS":
   
        return { ...state, products:action.payload};
    
       default:
           return state
    }
}
export const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
   
  });