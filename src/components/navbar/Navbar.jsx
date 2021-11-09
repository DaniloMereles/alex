import logo from '../../assets/alex-logo.svg'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { context } from '../../context/Context'
export const Navbar = () => {
    const {state, userLogout} = useContext(context)



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
                <h2 className="navbar__text">
                    Total Price: {`${new Intl.NumberFormat().format(state.totalPrice)} Gs `}
                </h2>

                <h2 className="navbar__text">
                    {
                        ` ${state.user.username} - ${state.user.email} ` 
                    }
                </h2>

                <button className="navbar__logout" onClick={() => userLogout()}>
                    <i className='bx bx-log-out'></i>
                </button>
            </div>
        </nav>
    )
}
