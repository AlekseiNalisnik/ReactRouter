import React from 'react'
import {BrowserRouter, Switch, Route, withRouter, NavLink, Redirect} from 'react-router-dom';
import '../Style.css';


import Home from './Home';
import NotFound from "./NotFound";
import { Autho, authoFlag } from './Authorization';
import { Reg } from './Registation';
import Secret from './Secret';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        authoFlag === true
        ? <Component {...props} /> 
        : <Redirect to="/Home" />
    )} />
);

const login = () => (
    authoFlag === true 
    ? <div>Вы Вошли!</div>
    : <div></div>
)

const App = () => (
    <BrowserRouter>
        <div className="header">
            <div className="NavLink"><NavLink activeStyle={{ color: 'black'}} to="/Home">Главная</NavLink></div>
            <div className="NavLink"><NavLink activeStyle={{ color: 'black'}} to="/Reg">Регистрация</NavLink></div>
            <div className="NavLink"><NavLink activeStyle={{ color: 'black'}} to="/Autho">Авторизация</NavLink></div>
            <div className="NavLink"><NavLink activeStyle={{ color: 'black'}} to="/Secret">Секрет</NavLink></div>
            {login()}
        </div>
        <Switch>
            <Route exact path="/">
                <Redirect to="/Home" />
            </Route>
            <Route path="/Reg" component={Reg} />
            <Route path="/Autho" component={Autho} />
            <Route path="/Home" component={Home} />
            <PrivateRoute path="/Secret" component={Secret} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;
