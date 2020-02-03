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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
                style={{
                    border: !!error ? 'solid 1px red' : 'solid 1px #000000',
                    padding: '13px 21px',
                    width: '100%',
                    margin: '10px 0',
                }}
                id={name}
                name={name}
                placeholder={placeholder}
                type={type}
                onChange={handleChange}
                value={value}
            />
            {!!error && touched && (
                <div style={{ color: 'red', marginTop: '.5rem' }}>{error}</div>
            )}
        </div>
    )
}

export default InputField
