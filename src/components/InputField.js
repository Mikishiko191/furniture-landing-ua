import React from 'react'

const InputField = ({
    value,
    name,
    placeholder,
    type,
    handleChange,
    error,
    touched,
}) => {
    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}
        >
            <input
                style={{
                    border: !!error ? 'solid 1px red' : 'solid 1px #000000',
                    padding: '13px 21px',
                    width: '100%',
                    margin: '5px 0',
                }}
                id={name}
                name={name}
                placeholder={placeholder}
                type={type}
                onChange={handleChange}
                value={value}
            />
            {!!error && touched && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    )
}

export default InputField
