import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

// Components
import Image from './image'

const Wrapper = styled.div`
    margin: 0 50px;
    height: 94px;
    display: flex;
    align-items: center;
    .logo {
        img {
            margin: 0;
            padding-bottom: 3px;
        }
    }
`

const HeaderStyleComponent = styled.header`
    box-shadow: 0 2px 10px 0 #8e8e93;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    .phone {
        position: relative;
        &:before {
            position: absolute;
            top: 27px;
            left: -45px;
            height: 1px;
            width: 56px;
            content: '';
            background: #979797;
            transform: rotate(90deg);
        }
        margin-left: 50px;
        p {
            margin: 0;
        }
    }
`

const Button = styled.button`
    padding: 11px 30px;
    border: solid 2px #000000;
    cursor: pointer;
    transition: all 300ms;
    font-weight: 500;
    &:hover {
        background: #000000;
        color: white;
    }
`

const Header = ({ onHandleOpenModal }) => (
    <HeaderStyleComponent>
        <Wrapper>
            <div className="logo" style={{ width: 300 }}>
                <Link to="/">
                    <Image alt="лого" filename="logo.png" />
                </Link>
            </div>
            <Flex>
                <div className="phone">
                    <p>+38 (098) 777-67-60</p>
                    <p>+38 (099) 777-67-80</p>
                </div>
                <div>
                    <Button onClick={onHandleOpenModal}>Оформить заказ</Button>
                </div>
            </Flex>
        </Wrapper>
    </HeaderStyleComponent>
)

export default Header
