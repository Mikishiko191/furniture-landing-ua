import React, { useContext } from 'react'
import '../components/layout.css'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
// import { Link } from 'gatsby'
// import Image from '../components/image'
import SEO from '../components/seo'

// Utils
import debounce from '../utils/debaouce'

// Main Page components
import Header from '../components/header'
import Footer from '../components/Footer'
import MainContainer from './main-page/MainSection'
import ProductSlider from './main-page/ProductSlider'
import HowLongWeAre from './main-page/HowLongWeAre'
import MapSection from './main-page/MapSection'
import WeHaveForYouSomething from './main-page/weHaveForYouSomething'
import Modal from '../components/Modal'
import ScrollToTop from '../components/ScrollToTop'

// Icons
import { Facebook, Instagram, Gmail } from '../components/Icons'

const SideMenu = styled.div`
    padding: 20px;
    h2 {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        margin-bottom: 15px;
    }
    p {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        margin-bottom: 3px;
    }
    a {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-decoration: underline;
        margin: 0;
        color: white;
    }
    ul {
        margin: 0;
        list-style: none;
        li {
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
        }
    }
    .icons {
        display: flex;
        justify-content: space-between;
    }
`

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 105)

const IndexPage = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [scrollDirection, setScrollDirection] = React.useState('')
    const [isSideMenuOpen, setSideMenu] = React.useState(false)

    const productSectionRef = React.useRef(null)
    const scrollToAboutRef = React.useRef(null)
    const scrollToContactUsRef = React.useRef(null)

    const scrollToElement = () => {
        scrollToRef(productSectionRef)
    }

    React.useEffect(() => {
        if (!!scrollDirection) {
            scrollDirection === 'about'
                ? scrollToRef(scrollToAboutRef)
                : scrollToRef(scrollToContactUsRef)
        }
    }, [scrollDirection])

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const onHandleOpenModal = () => {
        setIsOpen(true)
    }

    const onHandelCloseModal = () => {
        setIsOpen(false)
    }

    const onHandleScrollTo = args => {
        setScrollDirection(args)
    }

    const onHandleOpenSlider = () => {
        setSideMenu(!isSideMenuOpen)
    }

    const onHandleCloseSideMenu = () => {
        setSideMenu(false)
    }

    const onHandleTouchMove = debounce(() => {
        setSideMenu(false)
    }, 10)

    return (
        <>
            <Header
                siteTitle={data.site.siteMetadata.title}
                onHandleOpenModal={onHandleOpenModal}
                onHandleScrollTo={onHandleScrollTo}
                onHandleOpenSlider={onHandleOpenSlider}
                isSideMenuOpen={isSideMenuOpen}
            />
            <main onClick={onHandleCloseSideMenu} style={{ marginTop: 94 }}>
                <SEO title="Home" />
                <MainContainer scrollToElement={scrollToElement} />
                <ProductSlider productSectionRef={productSectionRef} />
                <HowLongWeAre scrollToAboutRef={scrollToAboutRef} />
                <MapSection />
                <WeHaveForYouSomething />
            </main>
            <div
                id="sideMenu"
                className={isSideMenuOpen ? 'slide-in' : 'slide-out'}
                onTouchMove={onHandleTouchMove}
            >
                <SideMenu>
                    <h2>НУЖНА КОНСЛУЛЬТАЦИЯ </h2>
                    <p>Звоните по телефонам:</p>
                    <p>+38 (098) 777-67-60</p>
                    <p>+38 (099) 777-67-80</p>
                    <div style={{ marginBottom: 23 }}>
                        <a href="mailto:support@capitone-style.com">
                            support@capitone-style.com
                        </a>
                    </div>
                    <h2>КОРПОРАТИВНЫМ И ОПТОВЫМ КЛИЕНТАМ </h2>
                    <a href="mailto:sales@capitone-style.com">
                        sales@capitone-style.com
                    </a>
                    <h2>ОПЛАТА </h2>
                    <p>
                        При покупке вы оплачиваете 50%, остача — по факту
                        получения товара
                    </p>
                    <p style={{ margin: '15px 0' }}>Варианты оплаты: </p>
                    <ul>
                        <li>1. Безналичная оплата на расчетный счет</li>
                        <li>2. Перевод на карту ПриватБанка</li>
                    </ul>
                    <h2>ДОСТАВКА </h2>
                    <p style={{ marginBottom: 14 }}>
                        Бесплатно по Украине транспортной компанией Delivery до
                        отделения в Вашем населенном пункте
                    </p>
                    <p style={{ marginBottom: 10 }}>
                        Доставка по миру обслуждается индивидуально с менеджером
                    </p>
                    <div className="icons">
                        <a href="#!">
                            <Facebook />
                        </a>
                        <a href="#!">
                            <Instagram />
                        </a>
                        <a href="#!">
                            <Gmail />
                        </a>
                    </div>
                </SideMenu>
            </div>
            <Modal
                modalIsOpen={modalIsOpen}
                onHandelCloseModal={onHandelCloseModal}
            />
            <Footer scrollToContactUsRef={scrollToContactUsRef} />
            <ScrollToTop />
        </>
    )
}

export default IndexPage
