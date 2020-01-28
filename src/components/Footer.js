import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 60px;
    color: white;
`

const Footer = () => {
    return (
        <footer
            style={{ background: '#000000', position: 'relative', zIndex: -5 }}
        >
            <Grid>
                <div>
                    <h5>НУЖНА КОНСЛУЛЬТАЦИЯ МЕНЕДЖЕРА</h5>
                    <p>Звоните по телефонам:</p>
                    <p>+38 (098) 777-67-60</p>
                    <p>+38 (099) 777-67-80</p>
                    <a href="mailto:support@capitone-style.com">
                        support@capitone-style.com
                    </a>
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
                    <p>Варианты оплаты: </p>
                    <ul>
                        <li>Безналичная оплата на расчетный счет</li>
                        <li>Перевод на карту ПриватБанка</li>
                    </ul>
                    socilas
                </div>
                <div>
                    <h5>ДОСТАВКА </h5>
                    <p>Осуществляется только по предоплате</p>
                    <p>
                        Доставка по Украине транспортной компанией Delivery до
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
