import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { context } from '../../context/Context'
import './Form.css'
const initialForm = {
    email: "", 
    username: "",
    password: ""
}

export const Form = () => {
    const [form, setForm] = useState(initialForm)
    const [message, setMessage] = useState(null)
    const { userAuth } = useContext(context)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!form.email){
            setMessage("Please add email")

            setTimeout(() => {
                setMessage(null)
            }, 1000)
            return
        }

        if(!form.username){
            setMessage("Please add username")

            setTimeout(() => {
                setMessage(null)
            }, 1000)
            return
        }

        if(!form.password){
            setMessage("Please add password")

            setTimeout(() => {
                setMessage(null)
            }, 1000)
            return
        }

        setForm(initialForm)
        setMessage("Login....")
        userAuth(form)
        setTimeout(() => {
            setMessage(null)
            history.push("/")
        }, 2000)
    }

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__container">
                <div className="form__group">
                    <label className="form__label" htmlFor="form__email">Email</label>
                    <input 
                        name="email" 
                        type="email" 
                        id="form__email" 
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="form__input" />
                </div>

                <div className="form__group">
                    <label className="form__label" htmlFor="form__username">Username</label>
                    <input 
                        name="username" 
                        type="text" 
                        id="form__username" 
                        value={form.username}
                        onChange={handleInputChange}
                        placeholder="Username"
                        className="form__input" />
                </div>

                <div className="form__group">
                    <label className="form__label" htmlFor="form__password">Password</label>
                    <input 
                        name="password" 
                        type="password" 
                        id="form__password" 
                        value={form.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        className="form__input" />
                </div>

                {
                    message ? <p className="form__message"> {message} </p> : null
                }

                <button className="form__button" type="submit">
                    Auth
                </button>
            </div>
        </form>
    )
}