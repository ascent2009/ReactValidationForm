import React, {useState, useEffect} from "react";
import '../../App.scss';

const CustomForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [lang, setLang] = useState('')
    const [checked, setChecked] = useState(false)
        
    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [langDirty, setLangDirty] = useState(false)

    const [nameError, setNameError] = useState('Поле не может быть пустым')
    const [emailError, setEmailError] = useState('Поле не может быть пустым')
    const [phoneError, setPhoneError] = useState('Поле не может быть пустым')
    const [langError, setLangError] = useState('Выберите значение из списка')

    const [style] = useState(
        {color: 'red'}
    )

    const [formValid, setFormValid] = useState(false);
    
    useEffect(() => {
        if (nameError || emailError || phoneError || langError || !checked) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, emailError, phoneError, langError, checked])

    const leaveEmptyForm = (e) => {
        const name = e.target.name;
        switch (name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'phone':
                setPhoneDirty(true)
                break
            case 'lang':
                setLangDirty(true)
                break
        }
    }    
    

    const validateName = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const nameRegExp = /^\p{L}[\p{L}\p{M}\d\. ]*$/u;
        setName(value)
        if(!nameRegExp.test(String(value).toLowerCase())) {
            setNameError('Недопустимые символы в имени')
        } else {
            setNameError('')
        }
    }

    const validateEmail = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const emailRegExp = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
        setEmail(value)
        if(!emailRegExp.test(String(value).toLowerCase())) {
            setEmailError('Неправильный формат электронной почты')
        } else {
            setEmailError('')
        }
    }

    const validatePhone = (e) => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
        const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
        setPhone(value)
        if(!phoneRegExp.test(String(value).toLowerCase())) {
            setPhoneError('Неправильный формат номера телефона')
        } else {
            setPhoneError('')
        }
    }

    const selectLanguage = (e) => {
        const target = e.target
        const value = target.value;
        console.log(value);
        setLang(value)
        if (!value) {
            setLangError('Язык не выбран')
        } else {
            setLangError('')
        }
    }

    const handleCheckbox = () => {
        !checked && setChecked(true)
        checked && setChecked(false)
    }

    return (  
    <div className="content">
        <h1>Регистрация</h1>
        <p className="text">Уже есть аккаунт? <a href="#" className="link">Войти</a></p>
        <form>
            <div className="inputBlock">
                <label htmlFor="name" className="label">Имя <span style={style}>*</span></label>
                <input type="text" className="input" id="name"
                name='name'
                onBlur={e => leaveEmptyForm(e)}
                onChange={e => validateName(e)}
                value={name}
                placeholder="Введите Ваше имя"
                />
                {(nameDirty && nameError) && <div className="error">{nameError}</div>}
            </div>
            <div className="inputBlock">
                <label htmlFor="email" className="label">Еmail <span style={style}>*</span></label>
                <input type="email" className="input" id="email"
                name='email'
                onChange={validateEmail}
                onBlur={leaveEmptyForm}
                value={email}
                placeholder="Введите Ваш email"
                />
                {(emailError && emailDirty) && <div className="error">{emailError}</div>}
            </div>
            <div className="inputBlock">
                <label htmlFor="phone" className="label">Номер телефона <span style={style}>*</span></label>
                <input type="text" className="input" id="phone"
                name='phone'
                onChange={validatePhone}
                onBlur={leaveEmptyForm}
                value={phone}
                placeholder="Введите номер вашего телефона"
                />
                {(phoneError && phoneDirty) && <div className="error">{phoneError}</div>}
            </div>
            <div className="inputBlock">
                <label htmlFor="lang" className="label">Язык <span style={style}>*</span></label>
                <select className="input" id="lang" name="lang"
                value={lang}
                onBlur={leaveEmptyForm}
                onChange={selectLanguage}
                >
                    <option value="Язык" className="option">Язык</option>
                    <option value="Русский" className="option">Русский</option>
                    <option value="Английский" className="option">Английский</option>
                    <option value="Китайский" className="option">Китайский</option>
                    <option value="Испанский" className="option">Испанский</option>
                </select>
                {(langError && langDirty) && <div className="error">{langError}</div>}
            </div>
            <div className="checkboxBlock">
                <input type="checkbox" id="checkbox"
                name='checked'
                // checked={false}
                onChange={handleCheckbox}
                className="checkbox"></input>
                <label htmlFor="checkbox">Принимаю <a href="#" className="link">условия</a> использования</label>
            </div>
            <button type="button" disabled={!formValid} className={!formValid ? "btn" : "btn active"}>Зарегистрироваться</button>
        </form>
    </div>
)};
 
export default CustomForm;