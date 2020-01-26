import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const MarkerStyle = styled.div`
    position: absolute;
    border-radius: 50% 50% 50% 0;
    border: 4px solid #82b1ff;
    width: 20px;
    height: 20px;
    transform: rotate(-45deg);
    &:after {
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        margin-left: -5px;
        margin-top: -5px;
        background-color: #82b1ff;
    }
`

const Marker = ({ text, onMarkerClick }) => (
    <MarkerStyle title={text} onClick={onMarkerClick} />
)

const GoogleMap = () => {
    const [state, setState] = React.useState({
        center: {
            lat: 50.588486,
            lng: 30.493072,
        },
        zoom: 16,
    })
    function onMarkerClick() {
        window.open(
            'https://www.google.com.ua/maps/place/%D0%92%D0%B8%D1%88%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D1%8C%D0%BA%D0%B0+%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%BD%D0%B0+%D0%B1%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0/@50.5884579,30.4927071,19z/data=!4m5!3m4!1s0x40d4d4a770e8c12f:0xe60a800f122ab297!8m2!3d50.588518!4d30.4930995?hl=uk&authuser=0',
            '_blank'
        )
    }
    return (
        <GoogleMapReact
            bootstrapURLKeys={{
                key: 'AIzaSyCZStmPBeamfUsYDp7S83TOqHGyV1dRH5k',
            }}
            defaultCenter={state.center}
            defaultZoom={state.zoom}
        >
            <Marker
                lat={state.center.lat}
                lng={state.center.lng}
                text="Вишгородська центральна районна бібліотека"
                onMarkerClick={onMarkerClick}
            />
        </GoogleMapReact>
    )
}

export default GoogleMap
