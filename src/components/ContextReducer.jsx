import React, { act, createContext, useContext, useReducer } from "react";

const CartStateContext=createContext();
const CartDispactchContext=createContext();


const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD':
            return [...state,{id:action.id,name:action.name,qty:action.qty,price:action.price,finalPrice:action.finalPrice}]

            default:
                console.log("Error in reducer");
    }

}
export const CartProvider=({children})=>{

    const [state,dispatch]= useReducer(reducer,[])
    return(
<CartDispactchContext.Provider value={dispatch}>
    <CartStateContext.Provider value={state}>
        {children}
    </CartStateContext.Provider>
</CartDispactchContext.Provider>
    )
}

export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispactchContext);