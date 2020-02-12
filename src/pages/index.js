import React, { useContext } from 'react'
import '../components/layout.css'
import { useStaticQuery, graphql } from 'gatsby'
// import { Link } from 'gatsby'
// import Image from '../components/image'
import SEO from '../components/seo'

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

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 105)

const IndexPage = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [scrollDirection, setScrollDirection] = React.useState('')

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

    return (
        <>
            <Header
                siteTitle={data.site.siteMetadata.title}
                onHandleOpenModal={onHandleOpenModal}
                onHandleScrollTo={onHandleScrollTo}
            />
            <main style={{ marginTop: 94 }}>
                <SEO title="Home" />
                <MainContainer scrollToElement={scrollToElement} />
                <ProductSlider productSectionRef={productSectionRef} />
                <HowLongWeAre scrollToAboutRef={scrollToAboutRef} />
                <MapSection />
                <WeHaveForYouSomething />
            </main>
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
