import React from 'react'
import { useFormik } from 'formik'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import * as Yup from 'yup'

// Components
import ReactSelect from './ReactSelect'
import InputField from './InputField'

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    couchSize: Yup.string()
        .ensure()
        .required('CouchSize is required!'),
    color: Yup.string()
        .ensure()
        .required('Color is required!'),
    mattress: Yup.string()
        .ensure()
        .required('Mattress is required!'),
    mattressSize: Yup.string()
        .ensure()
        .required('Mattress size is required!'),
})

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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
`

const options = [
    { value: 12, label: 'Food' },
    { value: 33, label: 'Being Fabulous' },
    { value: 45, label: 'Ken Wheeler' },
    { value: 100, label: 'ReasonML' },
    { value: 333, label: 'Unicorns' },
    { value: 1234, label: 'Kittens' },
]

const colorOptions = [
    { value: 12, label: 'MT Velour DELUXE 1', img: '#!' },
    { value: 33, label: 'MT Velour DELUXE 2', img: '#!' },
    { value: 45, label: 'MT Velour DELUXE 3', img: '#!' },
    { value: 100, label: 'MT Velour DELUXE 4', img: '#!' },
    { value: 333, label: 'MT Velour DELUXE 5', img: '#!' },
    { value: 1234, label: 'MT Velour DELUXE 6', img: '#!' },
]

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
}

const MainForm = () => {
    const userOrderForm = React.useRef(null)

    const [priceValue, setPrice] = React.useState({
        price: 0,
    })

    const formik = useFormik({
        initialValues: {
            firstName: '',
            phone: '',
            couchSize: '',
            color: '',
            mattress: '',
            mattressSize: '',
        },
        validationSchema,
        onSubmit: values => {
            const schema = {
                firstName: values.firstName,
                phone: values.phone,
                couchSize: values.couchSize.value,
                color: values.color.value,
                mattress: values.mattress.value,
                mattressSize: values.mattressSize.value,
            }

            const form = userOrderForm.current
            console.log(form)
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode({
                    'form-name': form.getAttribute('name'),
                    ...schema,
                }),
            })
                .then(response => {
                    console.log('====================================')
                    console.log(`${JSON.stringify(response, null, 2)}`)
                    console.log('====================================')
                    navigate(form.getAttribute('action'))
                })
                .catch(error => {
                    console.log('====================================')
                    console.log(`error in submiting the form data:${error}`)
                    console.log('====================================')
                })

            // fetch('/', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            //     body: encode({ 'form-name': 'userOrder', ...schema }),
            // })
            //     .then(() => alert('Success!'))
            //     .catch(error => alert(error))
        },
    })

    React.useEffect(() => {
        if (formik.values.couchSize) {
            setPrice({
                price: formik.values.couchSize.value,
            })
        }
        if (formik.values.color) {
            setPrice({
                price:
                    formik.values.color.value + formik.values.couchSize.value,
            })
        }
        if (formik.values.mattress) {
            setPrice({
                price:
                    formik.values.color.value +
                    formik.values.couchSize.value +
                    formik.values.mattress.value,
            })
        }
        if (formik.values.mattressSize) {
            setPrice({
                price:
                    formik.values.color.value +
                    formik.values.couchSize.value +
                    formik.values.mattress.value +
                    formik.values.mattressSize.value,
            })
        }
    }, [
        formik.values.couchSize,
        formik.values.color,
        formik.values.mattress,
        formik.values.mattressSize,
    ])

    return (
        <div className="main-form">
            <form
                netlify="true"
                name="userOrder"
                method="POST"
                action="/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                ref={userOrderForm}
                onSubmit={formik.handleSubmit}
                className="product-select-form"
            >
                <Grid>
                    <input type="hidden" name="form-name" value="userOrder" />
                    <p hidden>
                        <label>
                            Don’t fill this out: <input name="bot-field" />
                        </label>
                    </p>

                    <ReactSelect
                        label="РАЗМЕР КРОВАТИ:"
                        options={options}
                        selectName="couchSize"
                        value={formik.values.couchSize}
                        onChange={formik.setFieldValue}
                        onBlur={formik.setFieldTouched}
                        error={formik.errors.couchSize}
                        touched={formik.touched.couchSize}
                        placeholder="Выберите кровать"
                    />

                    <ReactSelect
                        label="ЦВЕТ ОБИВКИ:"
                        options={colorOptions}
                        selectName="color"
                        value={formik.values.color}
                        onChange={formik.setFieldValue}
                        onBlur={formik.setFieldTouched}
                        error={formik.errors.color}
                        touched={formik.touched.color}
                        isDisabled={!formik.values.couchSize}
                        placeholder="Выберите обивку"
                    />

                    <ReactSelect
                        label="МАТРАС:"
                        options={options}
                        selectName="mattress"
                        value={formik.values.mattress}
                        onChange={formik.setFieldValue}
                        onBlur={formik.setFieldTouched}
                        error={formik.errors.mattress}
                        touched={formik.touched.mattress}
                        isDisabled={!formik.values.color}
                        placeholder="Выберите матрас"
                    />

                    <ReactSelect
                        label="РАЗМЕР МАТРАСА:"
                        options={options}
                        selectName="mattressSize"
                        value={formik.values.mattressSize}
                        onChange={formik.setFieldValue}
                        onBlur={formik.setFieldTouched}
                        error={formik.errors.mattressSize}
                        touched={formik.touched.mattressSize}
                        isDisabled={!formik.values.mattress}
                        placeholder="Выберите размер матраса"
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
                </Grid>

                <div className="product-full-price">
                    Итого: <span>{priceValue.price} грн</span>
                </div>
                <div className="product-submit">
                    <Button type="submit">Отправить заказ</Button>
                </div>
            </form>
        </div>
    )
}

export default MainForm
