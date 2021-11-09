import { useReducer, createContext, useEffect } from "react";
import { cartActions as TYPES } from "./reducers/cartActions";
import { cartReducer, initialCart } from "./reducers/cartReducer";
export const context = createContext()

const localState = JSON.parse(localStorage.getItem("state"))

export const Context = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, localState || initialCart)

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state))
    }, [state]) 

    const addToCart = (payload) => {
        dispatch({
            type: TYPES.ADD_TO_CART,
            payload
        })
    }

    const removeOneFromCart = (payload) => {
        dispatch({
            type: TYPES.REMOVE_ONE_FROM_CART,
            payload
        })
    }

    const removeAllFromCart = () => {
        dispatch({
            type: TYPES.REMOVE_ALL_FROM_CART
        })
    }

    const userAuth = (payload) => {
        dispatch({
            type: TYPES.USER_AUTH,
            payload
        })
    }

    const userLogout = () => {
        dispatch({
            type: TYPES.USER_LOGOUT
        })
    }

    return (
        <context.Provider value={{
            state,
            addToCart,
            removeOneFromCart,
            removeAllFromCart,
            userAuth,
            userLogout
        }}>
            {children}
        </context.Provider>
    )
}
