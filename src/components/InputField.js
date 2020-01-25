import React from 'react'

const InputField = ({ value, name, placeholder, type, handleChange }) => {
    return (
        <input
            style={{
                border: 'solid 1px #000000',
                padding: '13px 21px',
                width: '100%',
            }}
            id={name}
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={handleChange}
            value={value}
        />
    )
}

export default InputField
