import React from 'react'
import styled from 'styled-components'

// Components
import SliderSection from '../../components/Slider'
import { PdfFile } from '../../components/Icons'

const Button = styled.button`
    padding: 16px 30px;
    border: solid 2px #000000;
    background: #000000;
    color: white;
    cursor: pointer;
    transition: all 300ms;
    display: flex;
    align-items: center;
    svg {
        fill: white;
        margin-left: 15px;
    }
    &:hover {
        background: white;
        color: black;
        svg {
            fill: black;
        }
    }
`

const WeHaveForYouSomething = () => {
    const downloadPdf = () => {
        console.log('download')
    }
    return (
        <div style={{ overflow: 'hidden' }}>
            <SliderSection sliderTitle="А ТАКЖЕ У НАС ЕСТЬ ЧТО ПРЕДЛОЖИТЬ ВАМ ЕЩЕ" />
            <div style={{ textAlign: 'center', marginTop: 100 }}>
                <div
                    style={{
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 40,
                    }}
                >
                    <Button onClick={downloadPdf}>
                        Скачать каталог <PdfFile />
                    </Button>
                </div>
                <div
                    style={{
                        marginBottom: 45,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
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
        </div>
    )
}

export default WeHaveForYouSomething
