import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

// Components
import ReactSelect from '../components/ReactSelect'
import Layout from '../components/layout'
import SEO from '../components/seo'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
]

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 70px;
    margin: 0 auto;
    max-width: 1400px;
    padding: 0 1.0875rem 1.45rem;
`

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

const ProductPage = ({ location }) => {
    const urlParams = new URLSearchParams(location.search)

    const [values, setValues] = React.useState({
        couchSize: '',
    })

    const { allFurnitureJson } = useStaticQuery(
        graphql`
            query {
                allFurnitureJson {
                    nodes {
                        id
                        image
                        title
                        description
                        reference
                        price
                    }
                }
            }
        `
    )

    const data = allFurnitureJson.nodes.find(
        item => item.id === urlParams.get('id')
    )

    const handleSelect = selectedOption => {
        console.log(selectedOption)
        // setValues({ ...values, [prop]: event.target.value });
    }

    return (
        <Layout>
            {!data ? (
                <div>Нечего не найдено</div>
            ) : (
                <>
                    <SEO title="Product title" />
                    <Grid>
                        <div>slider</div>
                        <div className="product-description">
                            <h2>{data.title}</h2>
                            <ul>
                                <li>Материал: велюр</li>
                                <li>Ножки: скрытые пластиковые</li>
                                <li>Наполнение: пенополиуретан </li>
                                <li>Основа под матрас: ортопедическая рамка</li>
                                <li>Ниша для вещей: есть</li>
                                <li>
                                    Конструкция: каркас из ДСП, деревянного
                                    бруса и фанерного листа
                                </li>
                                <li>
                                    Механизм: подъёмный механизм с
                                    газо-масляными амортизаторами
                                </li>
                                <li>
                                    Дополнительно: мебельные стразы вместо
                                    пуговиц 2100 грн
                                </li>
                                <li>
                                    Матрас (по желанию): матрас «Сан» матрас
                                    «Моко-Софт»
                                </li>
                            </ul>
                            <hr />
                            <div className="product-includes">
                                <p>Вместе с кроватью вы получаете:</p>
                                <ul>
                                    <li>ТТН / Чек</li>
                                    <li>Паспорт товара</li>
                                    <li>Инструкцию по уходу и сборке</li>
                                    <li>Гарантийный талон</li>
                                </ul>
                                <a href="#!">ОПЛАТА ДОСТАВКА ГАРАНТИЯ </a>
                            </div>
                            <div className="product-price">
                                от <span>17 200 грн</span>
                            </div>
                            <hr />
                            <div className="product-select">
                                <ReactSelect
                                    handleChange={handleSelect}
                                    options={options}
                                />
                            </div>
                            <div className="product-full-price">
                                Итого: <span>0грн</span>
                            </div>
                            <div className="product-submit">
                                <Button>Отправить заказ</Button>
                            </div>
                        </div>
                    </Grid>
                </>
            )}
        </Layout>
    )
}

export default ProductPage
