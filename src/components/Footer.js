import React from 'react'
import styled from 'styled-components'

// Icons
import SocialIcons from './SocialIcons'

const Grid = styled.div`
    display: grid;
    /* grid-template-columns: repeat(1, 1fr);
    text-align: center; */
    grid-column-gap: 30px;
    padding: 60px;
    color: white;

    /* Custom, iPhone Retina */
    @media only screen and (min-width: 320px) {
        grid-template-columns: repeat(1, 1fr);
        text-align: center;
        ul {
            list-style: none;
        }
    }

    /* Small Devices, Tablets */
    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        text-align: left;
        ul {
            list-style: inside;
        }
    }

    /* Large Devices, Wide Screens */
    @media only screen and (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 100px;
        text-align: left;
    }

    h5 {
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
        margin-bottom: 11px;
    }
    p {
        margin: 4px 0;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
    }
    ul {
        margin: 0;
        padding-bottom: 25px;
        li {
            margin: 4px 0;
        }
    }
    a {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
        cursor: pointer;
        transition: all 600ms;
        &:hover {
            color: gray;
        }
    }
    .icons {
        display: flex;
        justify-content: space-around;
        margin: 0 55px;
        a {
            cursor: pointer;
            transition: all 600ms;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
`

const Footer = ({ scrollToContactUsRef }) => {
    return (
        <footer style={{ background: '#000000' }} ref={scrollToContactUsRef}>
            <Grid>
                <div>
                    <h5>НУЖНА КОНСЛУЛЬТАЦИЯ МЕНЕДЖЕРА</h5>
                    <p>Звоните по телефонам:</p>
                    <p>+38 (098) 777-67-60</p>
                    <p>+38 (099) 777-67-80</p>
                    <div style={{ marginBottom: 48 }}>
                        <a href="mailto:support@capitone-style.com">
                            support@capitone-style.com
                        </a>
                    </div>
                    <h5>КОРПОРАТИВНЫМ И ОПТОВЫМ КЛИЕНТАМ </h5>
                    <a href="mailto:sales@capitone-style.com">
                        sales@capitone-style.com
                    </a>
                </div>
                <div>
                    <h5>ОПЛАТА </h5>
                    <p>
                        При покупке вы оплачиваете 50%, остача — по факту
                        получения товара
                    </p>
                    <p style={{ margin: '15px 0' }}>Варианты оплаты: </p>
                    <ul>
                        <li>Безналичная оплата на расчетный счет</li>
                        <li>Перевод на карту ПриватБанка</li>
                    </ul>
                    <SocialIcons />
                </div>
                <div>
                    <h5>ДОСТАВКА </h5>
                    <p style={{ marginBottom: 14 }}>
                        Бесплатно по Украине транспортной компанией Delivery до
                        отделения в Вашем населенном пункте
                    </p>
                    <p>
                        Доставка по миру обслуждается индивидуально с менеджером
                    </p>
                </div>
            </Grid>
        </footer>
    )
}

export default Footer
