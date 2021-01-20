import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import History from './components/History'
import Home from './components/Home'
import Register from './components/Register'
import { Link } from 'react-router-dom'

export default <Switch>
    <Route exact path="/" component = {Login} />
    <Route path="/Register" component = {Register} />
    <Route path="/Home" component = {Home} />
    <Route path="/History" component = {History} /> 
    <Route render={ () => {
        return(
            <div>
                <h1>404 Not Found</h1>
                <p>Click to go <Link to="/">Home</Link> </p>
            </div>
        )
    }} />
</Switch>