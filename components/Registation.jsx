import React from 'react'
import '../Style.css';
import { NavLink, Redirect } from 'react-router-dom';
import Axios from 'axios';

let onSubmit = (e) => {
    e.preventDefault();
    Axios.post('/user', state)
    .then(res => {
        users.push(JSON.parse(res.config.data));
    });
    console.log('state - ', state);
};

let state = {
    login: '',
    password: '' 
};

let users = [];

let changeValue = field => ({ target }) => {
    state[field] = target.value;
    console.log(state);
};

const Reg = () => (
    <div>
        <h3>Тут Вы можете зарегистрироваться!</h3> 
        <form onSubmit={onSubmit} className="form">
            <h1>Зарегистрироваться</h1>
            <div className="input-form">
                <input type="text" onChange={changeValue('login')} placeholder="Логин" required/>
            </div>
            <div className="input-form">
                <input type="password" onChange={changeValue('password')} placeholder="Пароль" required/>
            </div>
            <div className="input-form">
                <input type="submit" value="Регистрация" />
            </div>
            <div className="return">Уже есть аккаунт? <NavLink to="/Autho">Войти</NavLink></div>
        </form>
    </div>
);

export { Reg, users };
