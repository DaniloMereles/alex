import logo from '../../assets/alex-logo.svg'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { context } from '../../context/Contex'
export const Navbar = () => {
    const {state} = useContext(context)

    console.log(state)

    return (
        <nav className="navbar">
            <div className="navbar__content">
                <NavLink to="/">
                    <img src={logo} className="navbar__logo" alt="logo" />
                </NavLink>

                <NavLink to="/cart" className="navbar__cart">
                    <i className='bx bx-cart-alt'></i>
                    
                    {
                        state.quantityInCart > 0 ? <p className="navbar__cart-number"> { state.quantityInCart } </p> : null
                    }
                </NavLink>
            </div>

            <div className="navbar__data">
                <p className="navbar__text">
                    <i className='bx bx-phone-call' ></i>
                    Call Center: +595 23 345 6800
                </p>

                <p className="navbar__text">
                    <i className='bx bxs-truck'></i>
                    Zonas de cobertura
                </p>
            </div>
        </nav>
    )
}
