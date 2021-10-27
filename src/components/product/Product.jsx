import { useContext } from 'react'
import { context } from '../../context/Contex'
import './Product.css'
export const Product = ({product}) => {
    const {addToCart} = useContext(context)

    return (
        <article className="product">
            <img src={product.url} alt={product.name} className="product__img" />

            <div className="product__details">
                <h2 className="product__name">
                    {product.name}
                </h2>
            
                <div className="product__price">
                    {`${new Intl.NumberFormat().format(product.price)}Gs `}
                </div>
            </div>

            <button className="product__add" onClick={() => addToCart(product)}>
                <i className='bx bxs-cart-add' ></i>
            </button>
        </article>
    )
}
