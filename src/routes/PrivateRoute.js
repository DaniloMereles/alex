import {Route, Redirect} from 'react-router-dom'
import {useContext} from 'react'
import { context } from '../context/Context'

export const PrivateRoute = ({component: Component, ...rest}) => {
    const { state } = useContext(context)
    const { user } = state

    console.log(user)
    return (
        <Route {...rest}>
            {
                user === undefined ? <Redirect to="/auth" /> : <Component />
            }
        </Route>
    )
}