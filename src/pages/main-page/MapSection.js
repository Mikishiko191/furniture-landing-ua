import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

// Components
import GoogleMap from '../../components/GoogleMap'
import Image from '../../components/image'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 53px;
    margin: 0 auto;
    max-width: 1300px;
    padding: 0 1.0875rem 1.45rem;
    .scroll {
        /* height: 80vh;
        overflow: scroll; */

        .col {
            padding: 30px;
            cursor: pointer;
            /* display: flex;
            align-items: center; */
            display: grid;
            grid-template-columns: 0.4fr 1fr;
            div {
                align-self: center;
            }
            /* justify-content: center; */
            transition: all 600ms;
            p {
                margin: 0;
                padding: 4px 0;
                line-height: normal;
            }
            &:nth-child(odd) {
                background: #e6e6e6;
            }
            &:hover {
                box-shadow: 0 2px 10px 0 #8e8e93;
                transform: translate3d(0, -3px, 0);
            }
        }
    }
`

const MapSection = () => {
    const [state, setState] = React.useState()

    const { allShopLocationOnMapJson } = useStaticQuery(
        graphql`
            query {
                allShopLocationOnMapJson {
                    nodes {
                        id
                        shopType
                        shopLogo
                        shop
                        address
                        workingHours
                        phone
                        lat
                        lng
                    }
                }
            }
        `
    )
    const onHandleSelect = list => {
        setState(list)
    }

    return (
        <section style={{ margin: '100px 0 ' }}>
            <h2 style={{ textAlign: 'center', marginBottom: 86 }}>
                УВИДЕТЬ ВЖИВУЮ И ОЦЕНИТЬ КАЧЕСТВО НАШЕЙ МЕБЕЛИ МОЖНО ЗДЕСЬ
            </h2>
            <Grid>
                <div className="scroll">
                    {allShopLocationOnMapJson.nodes.map(list => (
                        <div
                            className="col"
                            key={list.id}
                            onClick={() => onHandleSelect(list)}
                        >
                            <div style={{ width: 126 }}>
                                <Image alt="product" filename={list.shopLogo} />
                            </div>
                            <div>
                                <p style={{ color: '#000000' }}>
                                    <span
                                        style={{
                                            fontSize: 16,
                                            marginRight: 10,
                                        }}
                                    >
                                        {list.shopType}
                                    </span>
                                    <span style={{ fontSize: 20 }}>
                                        {list.shop}
                                    </span>
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span
                                        style={{
                                            color: '#6f6f75',
                                            paddingRight: 15,
                                        }}
                                    >
                                        Адрес:
                                    </span>{' '}
                                    {list.address}
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span
                                        style={{
                                            color: '#6f6f75',
                                            paddingRight: 15,
                                        }}
                                    >
                                        Режим работы:
                                    </span>
                                    {list.workingHours}
                                </p>
                                <p style={{ fontSize: 16 }}>
                                    <span
                                        style={{
                                            color: '#6f6f75',
                                            paddingRight: 15,
                                        }}
                                    >
                                        Телефон:
                                    </span>{' '}
                                    {list.phone}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ position: 'relative' }}>
                    <div
                        style={{ position: 'sticky', top: 120, height: '50vh' }}
                    >
                        <GoogleMap list={state} />
                    </div>
                </div>
            </Grid>
        </section>
    )
}

export default MapSection
