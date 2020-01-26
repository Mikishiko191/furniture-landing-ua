import React from 'react'
import Slider from 'react-slick'

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: 'linear',
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
            <h3
                style={{
                    textAlign: 'center',
                    marginBottom: 35,
                    fontSize: 32,
                    color: '#000000',
                }}
            >
                {sliderTitle}
            </h3>
            <Slider {...settings}>
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
