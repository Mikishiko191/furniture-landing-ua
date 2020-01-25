import React from 'react'
import Select from 'react-select'

const ReactSelect = ({
    selectName,
    label,
    selectedValue,
    onChange,
    onBlur,
    options,
    error,
    touched,
}) => {
    const handleChange = value => {
        // this is going to call setFieldValue and manually update values of the selectName
        onChange(selectName, value)
    }

    const handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched of the selectName
        onBlur(selectName, true)
    }

    return (
        <div style={{ margin: '1rem 0' }}>
            <label htmlFor="color" style={{ fontSize: 20 }}>
                {label}
            </label>
            <Select
                value={selectedValue}
                onChange={handleChange}
                onBlur={handleBlur}
                options={options}
                styles={{
                    dropdownIndicator: (base, state) => ({
                        ...base,
                        transition: 'all .2s ease',
                        transform: state.isFocused ? 'rotate(180deg)' : null,
                    }),
                    multiValueLabel: base => ({
                        ...base,
                        backgroundColor: 'black',
                        color: 'white',
                    }),
                    control: (base, props) => ({
                        ...base,
                        background: 'white',
                        // border: props.selectProps.errors
                        //     ? 'solid 1px #e01e25'
                        //     : 'solid 1px #ccc',
                        borderRadius: 1,
                        // '&:hover': {
                        //     border: props.selectProps.errors
                        //         ? 'solid 1px #e01e25'
                        //         : 'solid 1px #ccc',
                        // },
                        transition: 'all 300ms',
                        '&:hover': { borderColor: 'lightgray' },
                        border: '1px solid #000000',
                        boxShadow: 'none',
                    }),
                    valueContainer: (base, props) => ({
                        ...base,
                        background: props.selectProps.isDisabled
                            ? 'rgba(0, 0, 0, 0.12)'
                            : '',
                        color: 'white',
                        width: '100%',
                        padding: '10px 14px',
                    }),
                    placeholder: base => ({
                        ...base,
                        color: 'black',
                    }),
                    menu: base => ({
                        ...base,
                        background: 'white',
                        color: 'black',
                        zIndex: 2,
                    }),
                }}
            />
            {!!error && touched && (
                <div style={{ color: 'red', marginTop: '.5rem' }}>{error}</div>
            )}
        </div>
    )
}

export default ReactSelect
