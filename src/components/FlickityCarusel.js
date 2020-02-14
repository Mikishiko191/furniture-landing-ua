import React from 'react'
import Flickity from 'react-flickity-component'

import styled from 'styled-components'

// Styles
import './flickity.css'

const H3 = styled.div`
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    margin-bottom: 16px;
`

const flickityOptions = {
    initialIndex: 1,
    lazyLoad: 2,
    wrapAround: true,
    fullscreen: true,
    pageDots: false,
}

const data = [
    { img: 'https://picsum.photos/720/540/?image=517' },
    { img: 'https://picsum.photos/720/540/?image=696' },
    { img: 'https://picsum.photos/720/540/?image=56' },
    { img: 'https://picsum.photos/720/540/?image=1084' },
    { img: 'https://picsum.photos/720/540/?image=1080' },
    { img: 'https://picsum.photos/720/540/?image=1074' },
    { img: 'https://picsum.photos/720/540/?image=1062' },
    { img: 'https://picsum.photos/720/540/?image=1002' },
    { img: 'https://picsum.photos/720/540/?image=935' },
    { img: 'https://picsum.photos/720/540/?image=855' },
    { img: 'https://picsum.photos/720/540/?image=824' },
]

const Carousel = ({ sliderTitle }) => {
    return (
        <div style={{ margin: '42px 0' }}>
            <H3>{sliderTitle}</H3>
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                {data.map(item => (
                    <img
                        className="carousel-image"
                        data-flickity-lazyload={item.img}
                    />
                ))}
            </Flickity>
        </div>
    )
}

export default Carousel
