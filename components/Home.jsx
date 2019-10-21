import React from 'react'
import { withRouter } from 'react-router-dom';
import { authoFlag } from './Authorization';

const login = () => (
    authoFlag === true 
    ? <div className="login">Вы Вошли!</div>
    : <div></div>
)

const Home = () =>  (
    <div className="home">
        <h3>Главная страница</h3>
        <p>Вы перешли на главную страницу. Сверху представлено навигационное меню.
           Если вы хотите зарегистрироваться или войти, то нажмите на 
           соответствующие кнопки сверху. После регистрации Вам будет доступно
           секретное меню. 
        </p>
        {login()}
    </div>
);

export default withRouter(Home);
