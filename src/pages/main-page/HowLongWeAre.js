import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

// Components
import SliderSection from '../../components/Slider'

const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.44);
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 12px;
    margin: 0 auto;
    max-width: 1300px;
    padding: 0 1.0875rem 1.45rem;
    width: 100%;
    z-index: 1;
    .col {
        text-align: center;
        h3 {
            font-size: 92px;
            font-weight: 500;
            color: #ffffff;
            margin: 0;
        }
        h4 {
            height: 48px;
            font-size: 40px;
            font-weight: 600;
            color: #ffffff;
            margin: 0;
        }
    }
`

const HowLongWeAre = ({ className }) => {
    const { mobileImage, desktopImage } = useStaticQuery(
        graphql`
            query {
                mobileImage: file(relativePath: { eq: "couch.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 490, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                desktopImage: file(relativePath: { eq: "couch.jpg" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 4160) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )

    // Set up the array of image data and `media` keys.
    // You can have as many entries as you'd like.
    const sources = [
        mobileImage.childImageSharp.fluid,
        {
            ...desktopImage.childImageSharp.fluid,
            media: `(min-width: 491px)`,
        },
    ]

    return (
        <>
            <BackgroundImage
                Tag="section"
                className={className}
                fluid={sources}
                backgroundColor={`#040e18`}
            >
                <Shadow />
                <Grid>
                    <div className="col">
                        <h3>4+</h3>
                        <h4>года на рынке</h4>
                    </div>
                    <div className="col">
                        <h3>5480+</h3>
                        <h4>готовых изделий</h4>
                    </div>
                    <div className="col">
                        <h3>80+</h3>
                        <h4>городов</h4>
                    </div>
                </Grid>
            </BackgroundImage>
            <SliderSection sliderTitle="ВЕДЬ В НАШЕ ПРОИЗВОДСТВО ВЛОЖЕНА ДУША" />
            <SliderSection sliderTitle="ТАКЖЕ МЫ УЧАСНИКИ МЕЖДУНАРОДНЫХ ВЫСТАВОК" />
        </>
    )
}

const StyledHowLongWeAre = styled(HowLongWeAre)`
    position: relative;
    width: 100%;
    height: 50vh;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default StyledHowLongWeAre
