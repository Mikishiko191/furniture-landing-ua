import React from 'react'
import Select from 'react-select'

const ReactSelect = ({ selectedOption, handleChange, options }) => {
    return (
        <Select
            value={selectedOption}
            onChange={handleChange}
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
    )
}

export default ReactSelect
