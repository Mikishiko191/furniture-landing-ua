import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

// Components
import GoogleMap from '../../components/GoogleMap'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 53px;
    margin: 0 auto;
    max-width: 1300px;
    padding: 0 1.0875rem 1.45rem;
    .scroll {
        height: 80vh;
        overflow: scroll;

        .col {
            padding: 30px;
            cursor: pointer;
            transition: all 600ms;
            p {
                margin: 0;
                padding: 5px 0;
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
        <Grid>
            <div className="scroll">
                {allShopLocationOnMapJson.nodes.map(list => (
                    <div
                        className="col"
                        key={list.id}
                        onClick={() => onHandleSelect(list)}
                    >
                        <p style={{ color: '#000000' }}>
                            Магазин{' '}
                            <span style={{ fontSize: 28 }}>{list.shop}</span>
                        </p>
                        <p>
                            <span
                                style={{ color: '#6f6f75', paddingRight: 15 }}
                            >
                                Адрес:
                            </span>{' '}
                            {list.address}
                        </p>
                        <p>
                            <span
                                style={{ color: '#6f6f75', paddingRight: 15 }}
                            >
                                Режим работы:
                            </span>
                            {list.workingHours}
                        </p>
                        <p>
                            <span
                                style={{ color: '#6f6f75', paddingRight: 15 }}
                            >
                                Телефон:
                            </span>{' '}
                            {list.phone}
                        </p>
                    </div>
                ))}
            </div>
            <div style={{ height: '50vh' }}>
                <GoogleMap list={state} />
            </div>
        </Grid>
    )
}

export default MapSection
