import React from 'react'
import styled from 'styled-components'
import Image from './Image'

// Utils
import numberWithSpaces from '../utils/numberWithSpaces'

const Card = styled.div`
    border: solid 2px #d1d1d6;
    background-color: #fafafa;
    transition: all 630ms;
    &:hover {
        box-shadow: 0 0 10px 0 #8e8e93;
    }
`

const Content = styled.div`
    padding: 16px 35px 30px 35px;
    h3 {
        font-size: 25px;
        font-weight: 600;
        color: #2a2a2a;
    }

    h5 {
        font-size: 18px;
        font-weight: normal;
        line-height: 1.33;
        color: #2a2a2a;
    }

    p {
        font-size: 18px;
        font-weight: normal;
        line-height: 1.33;
        color: #2a2a2a;
    }

    .price {
        span {
            font-size: 26px;
            font-weight: 600;
            color: #2a2a2a;
        }
    }
`

const Button = styled.button`
    padding: 16px 30px;
    background: #000000;
    color: white;
    cursor: pointer;
    width: 100%;
    transition: all 600ms;
    &:hover {
        background: white;
        color: black;
    }
`

const CardComponent = ({
    imageSources,
    title,
    content,
    reference,
    price,
    onHandleClick,
}) => {
    return (
        <Card>
            <Image alt={title} filename={imageSources} />
            <Content>
                <h3>{title}</h3>
                <p style={{ height: 85 }}>{content}</p>
                <h5>{reference}</h5>
                <p className="price">
                    от <span>{numberWithSpaces(price)} грн</span>
                </p>
                <Button onClick={onHandleClick}>Подробнее</Button>
            </Content>
        </Card>
    )
}

export default CardComponent
