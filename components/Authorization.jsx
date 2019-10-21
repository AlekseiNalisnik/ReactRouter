import React from 'react'
import '../Style.css';
import { NavLink, Redirect } from 'react-router-dom';
import { users } from './Registation';

let onSubmit = (e) => {
    e.preventDefault();
    for(let i = 0; i < users.length; i++) {
        if(state.password === users[i].password &&
           state.login === users[i].login) {
                authoFlag = true;
                console.log('authoFlag - ', authoFlag);
           }
    }
    console.log('users - ', users);
};

let state = {
    login: '',
    password: '' 
};

let authoFlag = false;

let changeValue = field => ({ target }) => {
    state[field] = target.value;
    console.log(state);
};

const Autho = () => (
    <div>
    <h3>Тут Вы можете авторизироваться!</h3> 
    <form onSubmit={onSubmit} className="form">
        <h1>Вход</h1>
        <div className="input-form">
            <input type="text" onChange={changeValue('login')} placeholder="Логин" required/>
        </div>
        <div className="input-form">
            <input type="password" onChange={changeValue('password')} placeholder="Пароль" required/>
        </div>
        <div className="input-form">
            <input type="submit" value="Войти" />
        </div>
        <div className="return">Нет аккаунта? <NavLink to="/Reg">Регистрация</NavLink></div>
    </form>
</div>
);

export { Autho, authoFlag };
