import './Home.css'
import { Navbar } from "../../components/navbar/Navbar"
import { Product } from "../../components/product/Product"
import { useContext } from 'react'
import { context } from '../../context/Context'

export const Home = () => {
    const {state} = useContext(context)

    return (
        <div>
            <Navbar />

            <div className="home__products">
                <h1 className="home__title">
                    Products
                </h1>
                
                <div className="home__list">
                    {
                        state.products.map(product => (
                            <Product 
                                key={product.id}
                                product={product}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
