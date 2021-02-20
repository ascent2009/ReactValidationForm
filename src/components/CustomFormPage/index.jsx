import React from "react";
import '../../App.scss';

const CustomForm = () => (
    <div className="content">
        <h1>Регистрация</h1>
        <p className="text">Уже есть аккаунт? <a href="#" className="link">Войти</a></p>
        <form>
            <div className="inputBlock">
                <label htmlFor="name" className="label">Имя</label>
                <input type="text" className="input" id="name" placeholder="Введите Ваше имя" />
            </div>
            <div className="inputBlock">
                <label htmlFor="email" className="label">Еmail</label>
                <input type="text" className="input" id="email" placeholder="Введите Ваш email" />
            </div>
            <div className="inputBlock">
                <label htmlFor="phone" className="label">Номер телефона</label>
                <input type="text" className="input" id="phone" placeholder="Введите ваш email" />
            </div>
            <div className="inputBlock">
                <label htmlFor="lang" className="label">Язык</label>
                <select className="input" id="lang" placeholder="Язык">
                    <option value="Язык" className="option" selected>Язык</option>
                    <option value="Русский" className="option">Русский</option>
                    <option value="Английский" className="option">Английский</option>
                    <option value="Китайский" className="option">Китайский</option>
                    <option value="Испанский" className="option">Испанский</option>
                </select>
            </div>
            <div className="checkboxBlock">
                <input type="checkbox" id="checkbox" className="checkbox"></input>
                <label htmlFor="checkbox">Принимаю <a href="#" className="link">условия</a> использования</label>
            </div>
            
            <button type="button" className="btn">Зарегистрироваться</button>
        </form>
    </div>
);
 
export default CustomForm;