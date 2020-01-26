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

const MainContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    margin: 0 80px;
    color: white;
    h1 {
        font-size: 55px;
        font-weight: 900;
    }
    p {
        font-size: 28px;
        font-weight: 600;
    }

    .button {
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

const MainContainer = ({ className }) => {
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
        >
            <Shadow />
            <MainContent>
                <h1>
                    КРОВАТЬ ОТ ПРОИЗВОДИТЕЛЯ <br /> ЗА 3 ДНЯ
                </h1>
                <p>— Ручная работа</p>
                <p>— Серцифицированные матералы</p>
                <p>— Металлическая рамка</p>
                <p>— Буковые ламели</p>
                <p>— Импортный механизм</p>
                <p>— Контроль качества</p>
                <p>— Доставка бесплатная</p>
                <div className="button">
                    <button>Подробнее</button>
                </div>
            </MainContent>
        </BackgroundImage>
    )
}

const StyledMainContainer = styled(MainContainer)`
    position: relative;
    width: 100%;
    height: calc(100vh - 110px);
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
    z-index: -1;
`

export default StyledMainContainer
