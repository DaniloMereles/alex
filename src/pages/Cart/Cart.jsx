import { Navbar } from "../../components/navbar/Navbar"
import { ProductInCart } from "../../components/productInCart/ProductInCart"
import { context } from "../../context/Contex"
import { useContext } from 'react'
import './Cart.css'
export const Cart = () => {
    const {state, removeAllFromCart} = useContext(context)
    const {cart} = state

    return (
        <div>
            <Navbar />
            
            <div className="cart__texts">
                <h1 className="cart__title">
                    Cart
                </h1>

                <button className="cart__btn btn" onClick={() => removeAllFromCart()}>
                    Remove All
                </button>
            </div>

            <div className="cart__products">
                {
                    cart 
                    ? cart.map(product => ( <ProductInCart product={product}/> ))  
                    : <h2>Sin productos</h2>
                }
            </div>
        </div>
    )
}
