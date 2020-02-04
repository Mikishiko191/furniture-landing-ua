import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

// Components
import MainForm from '../components/MainForm'
import ProductShowCase from '../components/ProductShowCase'
import { PdfFile } from './Icons'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 70px;
    margin: 0 auto;
    max-width: 1600px;
    padding: 0 1.0875rem 1.45rem;
    .product-description {
        h2 {
            font-size: 33px;
            font-weight: 900;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #000000;
        }
        &__list {
            margin: 0;
            list-style: none;
            li {
                display: flex;
                align-items: center;
                hr {
                    background-color: #000000;
                    opacity: 0.5;
                    margin: 0 10px;
                }
            }
        }
    }
    .product-includes {
        p {
            font-size: 20px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #000000;
            margin-bottom: 20px;
        }
        ul {
            li {
                font-size: 18px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                color: #000000;
                margin-bottom: 12px;
            }
        }
    }

    .product-price {
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
        margin-bottom: 32px;
        span {
            font-size: 36px;
            font-weight: 600;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #000000;
        }
    }
`

const SingleProducts = ({ reference, productId }) => {
    const { allFurnitureJson } = useStaticQuery(
        graphql`
            query {
                allFurnitureJson {
                    nodes {
                        id
                        image
                        product {
                            id
                            image
                        }
                        title
                        description
                        reference
                        price
                        couchSize {
                            value
                            label
                        }
                        mattress {
                            value
                            label
                        }
                        mattressSize {
                            value
                            label
                            sans
                            soft
                        }
                    }
                }
            }
        `
    )

    const data = allFurnitureJson.nodes.find(item => item.id === productId)

    return (
        <section ref={reference} id={data.id}>
            {!data ? (
                <div>Нечего не найдено</div>
            ) : (
                <>
                    <Grid>
                        <div className="showcase">
                            <ProductShowCase item={data} />
                        </div>
                        <div className="product-description">
                            <h2>{data.title}</h2>
                            <ul className="product-description__list">
                                <li>
                                    Материал <hr style={{ width: 105 }} />
                                    велюр
                                </li>
                                <li>
                                    Ножки <hr style={{ width: 131 }} /> скрытые
                                    пластиковые
                                </li>
                                <li>
                                    Наполнение <hr style={{ width: 87 }} />{' '}
                                    пенополиуретан{' '}
                                </li>
                                <li>
                                    Основа под матрас{' '}
                                    <hr style={{ width: 35 }} /> ортопедическая
                                    рамка
                                </li>
                                <li>
                                    Ниша для вещей <hr style={{ width: 55 }} />{' '}
                                    есть
                                </li>
                                <li>
                                    Конструкция <hr style={{ width: 93 }} />{' '}
                                    каркас из ДСП, деревянного бруса и фанерного
                                    листа
                                </li>
                                <li>
                                    Механизм <hr style={{ width: 128 }} />{' '}
                                    подъёмный механизм с газо-масляными
                                    амортизаторами
                                </li>
                                <li>
                                    Дополнительно <hr style={{ width: 58 }} />{' '}
                                    мебельные стразы вместо пуговиц <br /> 2100
                                    грн
                                </li>
                                <li>
                                    Матрас (по желанию){' '}
                                    <hr style={{ width: 17 }} /> матрас «Сан»
                                    матрас «Моко-Софт»
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
                                <div
                                    style={{
                                        marginBottom: 45,
                                    }}
                                >
                                    <a
                                        href="!#"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: '#000000',
                                        }}
                                    >
                                        ОПЛАТА ДОСТАВКА ГАРАНТИЯ
                                        <PdfFile style={{ marginLeft: 15 }} />
                                    </a>
                                </div>
                            </div>
                            <div className="product-price">
                                от <span>17 200 грн</span>
                            </div>
                            <hr />
                            {/* Main form */}
                            <MainForm data={data} />
                        </div>
                    </Grid>
                </>
            )}
        </section>
    )
}

export default SingleProducts
