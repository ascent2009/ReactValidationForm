import React from 'react';
import './index.css';

const TextInput = ({
    name,
    title,
    type,
    value,
    onChange,
    onBlur,
    errors,
    touched,
    required
}) => (
    <div>
    <div className={required ? "input_wrapper required" : "input_wrapper"}>
        <div className={(errors && touched) ? "input_container error_input" : "input_container"}>
            <input 
                className='text_input'
                type={type}
                name={name}
                value={value}
                placeholder={title}
                onChange={onChange}
                onBlur={onBlur}/>
        </div>
        
    </div>
    {(errors && touched) && <span className="error_message">{errors}</span>}
    </div>
)

export default TextInput;
