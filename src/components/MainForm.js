import React from 'react'
import { useFormik } from 'formik'
import styled from 'styled-components'

// Components
import ReactSelect from './ReactSelect'
import InputField from './InputField'

const Button = styled.button`
    padding: 16px 30px;
    border: solid 2px #000000;
    background: #000000;
    color: white;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
        background: white;
        color: black;
    }
`

const options = [
    { value: 12, label: 'Food' },
    { value: 33, label: 'Being Fabulous' },
    { value: 45, label: 'Ken Wheeler' },
    { value: 100, label: 'ReasonML' },
    { value: 333, label: 'Unicorns' },
    { value: 1234, label: 'Kittens' },
]

const MainForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            phone: '',
            couchSize: '',
            color: '',
        },
        onSubmit: values => {
            console.log(values)
        },
    })

    return (
        <div className="main-form">
            <form
                onSubmit={formik.handleSubmit}
                className="product-select-form"
            >
                <ReactSelect
                    label="РАЗМЕР КРОВАТИ:"
                    options={options}
                    selectName="couchSize"
                    value={formik.values.couchSize}
                    onChange={formik.setFieldValue}
                    onBlur={formik.setFieldTouched}
                    error={formik.errors.couchSize}
                    touched={formik.touched.couchSize}
                />

                <ReactSelect
                    label="ЦВЕТ ОБИВКИ:"
                    options={options}
                    selectName="color"
                    value={formik.values.color}
                    onChange={formik.setFieldValue}
                    onBlur={formik.setFieldTouched}
                    error={formik.errors.color}
                    touched={formik.touched.color}
                />

                <InputField
                    name="firstName"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={formik.values.firstName}
                    handleChange={formik.handleChange}
                />

                <InputField
                    name="phone"
                    type="phone"
                    placeholder="Номер телефона"
                    value={formik.values.phone}
                    handleChange={formik.handleChange}
                />

                <div className="product-full-price">
                    Итого: <span>0 грн</span>
                </div>
                <div className="product-submit">
                    <Button type="submit">Отправить заказ</Button>
                </div>
            </form>
        </div>
    )
}

export default MainForm
