import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Auth } from '../pages/Auth/Auth'
import { Cart } from '../pages/Cart/Cart'
import { Home } from '../pages/Home/Home'
import { NotFount } from '../pages/NotFount/NotFount'
import { PrivateRoute } from './PrivateRoute'

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/cart" component={Cart} />
                <Route exact path="/auth" component={Auth} />
                <Route path="*" component={NotFount} />
            </Switch>
        </Router>
    )
}