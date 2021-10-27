import { cartActions as TYPES } from "./cartActions"

export const initialCart = {
    products: [
        {
            id: 1,
            name: "CELULAR SAMSUNG DUOS 64GB",
            price: 1326000,
            url: "https://cutt.ly/HRY8Jrf"
        },
        {
            id: 2,
            name: "CONGELADOR ELECTROLUX H3301T 320LTS",
            price: 2899000,
            url: "https://cutt.ly/sRY8CbQ"
        },
        {
            id: 3,
            name: "LAVARROPAS SAMSUNG WA13T5260BY 13KG",
            price: 3190000,
            url: "https://cutt.ly/LRY82Oo"
        },
        {
            id: 4,
            name: "BICICLETA STR LINDA 16",
            price: 699000,
            url: "https://cutt.ly/xRY856F"
        },
        {
            id: 5,
            name: "ESCRITORIO NOBILE OFFICE 51015 1200 NOGAL/TREND",
            price: 399000,
            url: "https://cutt.ly/xRY4yhh"
        },
        {
            id: 6,
            name: "NOBILE RACK PRINCE HAVANA",
            price: 399000,
            url: "https://cutt.ly/fRY4iKY"
        }
    ],
    cart: [],
    quantityInCart: 0
}

export const cartReducer = (state, action) => {

    switch(action.type){
        case TYPES.ADD_TO_CART:
            return {
                ...state, 
                cart: [action.payload, ...state.cart],
                quantityInCart: state.quantityInCart + 1 
            }
        case TYPES.REMOVE_ONE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload),
                quantityInCart: state.quantityInCart - 1
            }
        case TYPES.REMOVE_ALL_FROM_CART:
            return {
                ...state, 
                cart: [],
                quantityInCart: 0
            }
        default:
            return state
    }
}