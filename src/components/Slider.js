import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

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

const sliderOptions = {
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true,
    speed: 8000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3,
            },
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
}

const itemList = [
    { image: 1 },
    { image: 2 },
    { image: 3 },
    { image: 4 },
    { image: 5 },
    { image: 6 },
    { image: 7 },
    { image: 8 },
    { image: 9 },
]

const style = {
    borderLeft: 'solid 1px #979797',
    borderTop: 'solid 1px #979797',
    borderBottom: 'solid 1px #979797',
    width: 376,
    height: 310,
}

const SliderSection = ({ sliderTitle }) => {
    return (
        <div style={{ margin: '42px 0' }}>
            <H3>{sliderTitle}</H3>
            <Slider {...sliderOptions}>
                {itemList.map((item, index) => (
                    <div key={index}>
                        <div style={style}>{item.image}</div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderSection
