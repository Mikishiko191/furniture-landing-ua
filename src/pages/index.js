import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

// Main Page components
import MainContainer from './main-page/MainSection'
import ProductSlider from './main-page/ProductSlider'
import HowLongWeAre from './main-page/HowLongWeAre'
import MapSection from './main-page/MapSection'
import WeHaveForYouSomething from './main-page/weHaveForYouSomething'

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

const IndexPage = () => {
    const productSectionRef = React.useRef(null)
    const scrollToElement = () => {
        scrollToRef(productSectionRef)
    }
    return (
        <Layout>
            <SEO title="Home" />
            <MainContainer scrollToElement={scrollToElement} />
            <ProductSlider productSectionRef={productSectionRef} />
            <HowLongWeAre />
            <MapSection />
            <WeHaveForYouSomething />
            {/* <h1>Furniture project</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image alt="Gatsby in Space" filename="gatsby-astronaut.png" />
        </div> */}
            {/* <Link to="/page-2/">Go to page 2</Link> */}
        </Layout>
    )
}

export default IndexPage
