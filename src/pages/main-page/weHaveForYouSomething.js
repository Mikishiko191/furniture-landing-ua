import React from 'react'
import styled from 'styled-components'

// Components
import SliderSection from '../../components/Slider'

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

const WeHaveForYouSomething = () => {
    const downloadPdf = () => {
        console.log('download')
    }
    return (
        <div style={{ overflow: 'hidden' }}>
            <SliderSection sliderTitle="А ТАКЖЕ У НАС ЕСТЬ ЧТО ПРЕДЛОЖИТЬ ВАМ ЕЩЕ" />
            <div style={{ textAlign: 'center' }}>
                <Button onClick={downloadPdf}>Скачать каталог</Button>
                <br />
                <a href="!#">ОПЛАТА ДОСТАВКА ГАРАНТИЯ</a>
            </div>
        </div>
    )
}

export default WeHaveForYouSomething
