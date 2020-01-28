import React from 'react'
import Select, { components } from 'react-select'

const Option = props => {
    const hasImage = props.options.some(item => item.img)
    return (
        <components.Option {...props}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {hasImage && (
                    <div
                        style={{
                            width: 30,
                            height: 30,
                            background: 'pink',
                            marginRight: 10,
                        }}
                    >
                        {props.data.img}
                    </div>
                )}
                <div>{props.data.label}</div>
            </div>
        </components.Option>
    )
}

const ReactSelect = ({
    selectName,
    label,
    selectedValue,
    onChange,
    onBlur,
    options,
    error,
    touched,
    isDisabled,
    placeholder,
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
        <div style={{ marginBottom: 10 }}>
            <label htmlFor="color" style={{ fontSize: 20 }}>
                {label}
            </label>
            <Select
                value={selectedValue}
                onChange={handleChange}
                onBlur={handleBlur}
                options={options}
                isDisabled={isDisabled}
                components={{
                    Option,
                }}
                placeholder={
                    <span className="floating-label">{placeholder}</span>
                }
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
