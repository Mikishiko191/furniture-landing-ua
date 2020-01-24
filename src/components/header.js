import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'
import Image from './image'

const HeaderStyleComponent = styled.header`
    background: white;
    height: 110px;
    display: flex;
    align-items: center;
    margin: 0 50px;
    .logo {
        img {
            margin: 0;
            padding-bottom: 3px;
        }
    }
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
    padding: 16px 30px;
    border: solid 2px #000000;
    cursor: pointer;
    transition: all 300ms;
    &:hover {
        background: #000000;
        color: white;
    }
`

const Header = ({ siteTitle }) => (
    <HeaderStyleComponent>
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
                <Button>Оформить заказ</Button>
            </div>
        </Flex>
    </HeaderStyleComponent>
)

export default Header
