import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Cart } from './pages/Cart/Cart'
import { Home } from './pages/Home/Home'
import { NotFount } from './pages/NotFount/NotFount'

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
                <Route path="*" component={NotFount} />
            </Switch>
        </Router>
    )
}