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
            cursor: pointer;
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

const lists = [
    {
        id: 1,
        shop: '«BARIN HOUSE»',
        address: 'ул. 135-а Садовая 3 (район Осокорки)',
        workingHours: 'ПН-СБ 10:00 - 20:00, ВС - выходной',
        phone: '+38 (097) 403-82-28',
        lat: 50.390243,
        lng: 30.604721,
    },
    {
        id: 2,
        shop: '«Б-52»',
        address: 'ул. Братиславская 52 (Левый берег)',
        workingHours: 'ПН-СБ 10:00 - 20:00, ВС 10:00 - 19:00',
        phone: '+38 (067) 586-55-77',
        lat: 50.491302,
        lng: 30.610433,
    },
]

const MapSection = () => {
    const [state, setState] = React.useState()
    const onHandleSelect = list => {
        setState(list)
    }
    return (
        <Grid>
            <div className="scroll">
                {lists.map(list => (
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
