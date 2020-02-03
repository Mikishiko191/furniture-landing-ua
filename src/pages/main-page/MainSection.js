import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.44);
`

const ArrowDown = styled.div`
    width: 100%;
    text-align: center;
    cursor: pointer;

    svg {
        animation: action 600ms infinite alternate;
    }

    @keyframes action {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-10px);
        }
    }
`

const MainContent = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    margin: 0 80px;
    color: white;
    h1 {
        font-size: 45px;
        font-weight: 900;
        margin-bottom: 80px;
    }
    p {
        font-size: 24px;
        font-weight: 500;
        margin: 5px 0;
    }

    .button {
        margin-top: 100px;
        margin-bottom: 40px;
        text-align: center;
        width: 100%;
        button {
            padding: 23px 115px;
            cursor: pointer;
            transition: all 300ms;
            &:hover {
                background: #000000;
                color: white;
            }
        }
    }
`

const MainContainer = ({ className, scrollToElement }) => {
    const { mobileImage, desktopImage } = useStaticQuery(
        graphql`
            query {
                mobileImage: file(relativePath: { eq: "main_page.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 490, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                desktopImage: file(relativePath: { eq: "main_page.jpg" }) {
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
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={sources}
            backgroundColor={`#040e18`}
            style={{ zIndex: 3, marginBottom: 50 }}
        >
            <Shadow />
            <MainContent>
                <h1>
                    КРОВАТЬ ОТ ПРОИЗВОДИТЕЛЯ <br /> ЗА 3 ДНЯ
                </h1>

                <div
                    data-sal="fade"
                    data-sal-duration="600"
                    data-sal-delay="1000"
                    data-sal-easing="ease-out-back"
                >
                    <p>— Ручная работа</p>
                    <p>— Серцифицированные матералы</p>
                    <p>— Металлическая рамка</p>
                    <p>— Буковые ламели</p>
                    <p>— Импортный механизм</p>
                    <p>— Контроль качества</p>
                    <p>— Доставка бесплатная</p>
                </div>
                <div className="button" style={{ zIndex: 9 }}>
                    <button onClick={scrollToElement}>Подробнее</button>
                </div>
                <ArrowDown onClick={scrollToElement}>
                    <svg width="40" height="40" viewBox="0 0 512.011 512.011">
                        <path
                            fill="white"
                            d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
			s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
			C514.096,145.416,514.096,131.933,505.755,123.592z"
                        />
                    </svg>
                </ArrowDown>
            </MainContent>
        </BackgroundImage>
    )
}

const StyledMainContainer = styled(MainContainer)`
    position: relative;
    width: 100%;
    height: calc(100vh - 64px);
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    z-index: 1;
`

export default StyledMainContainer
