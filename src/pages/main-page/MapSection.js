import React from 'react'
import styled from 'styled-components'

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
            p {
                margin: 0;
                padding: 5px 0;
            }
            &:nth-child(odd) {
                background: #e6e6e6;
            }
        }
    }
`

const MapSection = () => {
    return (
        <Grid>
            <div className="scroll">
                <div className="col">
                    <p style={{ color: '#000000' }}>
                        Магазин{' '}
                        <span style={{ fontSize: 28 }}>«BARIN HOUSE»</span>
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Адрес:
                        </span>{' '}
                        ул. 135-а Садовая 3 (район Осокорки)
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Режим работы:
                        </span>
                        ПН-СБ 10:00 - 20:00, ВС - выходной
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Телефон:
                        </span>{' '}
                        +38 (097) 403-82-28
                    </p>
                </div>

                <div className="col">
                    <p style={{ color: '#000000' }}>
                        Магазин{' '}
                        <span style={{ fontSize: 28 }}>«BARIN HOUSE»</span>
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Адрес:
                        </span>{' '}
                        ул. 135-а Садовая 3 (район Осокорки)
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Режим работы:
                        </span>
                        ПН-СБ 10:00 - 20:00, ВС - выходной
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Телефон:
                        </span>{' '}
                        +38 (097) 403-82-28
                    </p>
                </div>
                <div className="col">
                    <p style={{ color: '#000000' }}>
                        Магазин{' '}
                        <span style={{ fontSize: 28 }}>«BARIN HOUSE»</span>
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Адрес:
                        </span>{' '}
                        ул. 135-а Садовая 3 (район Осокорки)
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Режим работы:
                        </span>
                        ПН-СБ 10:00 - 20:00, ВС - выходной
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Телефон:
                        </span>{' '}
                        +38 (097) 403-82-28
                    </p>
                </div>
                <div className="col">
                    <p style={{ color: '#000000' }}>
                        Магазин{' '}
                        <span style={{ fontSize: 28 }}>«BARIN HOUSE»</span>
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Адрес:
                        </span>{' '}
                        ул. 135-а Садовая 3 (район Осокорки)
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Режим работы:
                        </span>
                        ПН-СБ 10:00 - 20:00, ВС - выходной
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Телефон:
                        </span>{' '}
                        +38 (097) 403-82-28
                    </p>
                </div>
                <div className="col">
                    <p style={{ color: '#000000' }}>
                        Магазин{' '}
                        <span style={{ fontSize: 28 }}>«BARIN HOUSE»</span>
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Адрес:
                        </span>{' '}
                        ул. 135-а Садовая 3 (район Осокорки)
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Режим работы:
                        </span>
                        ПН-СБ 10:00 - 20:00, ВС - выходной
                    </p>
                    <p>
                        <span style={{ color: '#6f6f75', paddingRight: 15 }}>
                            Телефон:
                        </span>{' '}
                        +38 (097) 403-82-28
                    </p>
                </div>
            </div>
            <div style={{ height: '50vh' }}>
                <GoogleMap />
            </div>
        </Grid>
    )
}

export default MapSection
