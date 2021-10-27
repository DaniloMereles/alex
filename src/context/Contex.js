import { useReducer, createContext } from "react";
import { cartActions as TYPES } from "./reducers/cartActions";
import { cartReducer, initialCart } from "./reducers/cartReducer";

export const context = createContext()

export const Contex = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialCart)

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

    return (
        <context.Provider value={{
            state,
            addToCart,
            removeOneFromCart,
            removeAllFromCart
        }}>
            {children}
        </context.Provider>
    )
}
