import { useContext } from 'react'
import { context } from '../../context/Contex'
import './ProductInCart.css'
export const ProductInCart = ({product}) => {
    const { name, url, price, id } = product
    const { removeOneFromCart } = useContext(context)

    return (
        <article className="cartProduct">
            <div className="cartProduct__data">
                <img src={url} alt={name} className="cartProduct__img" />
                <div className="cartProduct__text">
                    <h2 className="cartProduct__name">
                        {name}
                    </h2>

                    <p className="cartProduct__price">
                    {`${new Intl.NumberFormat().format(price)}Gs `}
                    </p>
                </div>
            </div>

            <button onClick={() => removeOneFromCart(id)} className="cartProduct__btn btn">
                Remove from cart
            </button>
        </article>
    )
}