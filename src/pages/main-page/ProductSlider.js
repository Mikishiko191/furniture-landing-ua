import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

// Components
import Card from '../../components/Card'
import SingleProducts from '../../components/SingleProducts'

const Section = styled.section`
    margin: 0 auto;
    max-width: 1300px;
    padding: 0 1.0875rem 1.45rem;
`

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 12px;
`

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 115)

const ProductSlider = ({ productSectionRef }) => {
    const singleProductReference = React.useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
    ])

    const { allFurnitureJson } = useStaticQuery(
        graphql`
            query {
                allFurnitureJson {
                    nodes {
                        id
                        image
                        title
                        description
                        reference
                        price
                    }
                }
            }
        `
    )

    const onHandleSelectProductId = productId => {
        singleProductReference.current.map(item => {
            if (item.current.id === productId) {
                scrollToRef(item)
            }
        })
    }

    return (
        <Section ref={productSectionRef}>
            <ProductList>
                {allFurnitureJson.nodes.map(item => (
                    <Card
                        key={item.id}
                        imageSources={item.image}
                        imageAlt={item.title}
                        title={item.title}
                        content={item.description}
                        reference={item.reference}
                        price={item.price}
                        onHandleClick={() => onHandleSelectProductId(item.id)}
                    />
                ))}
            </ProductList>

            {allFurnitureJson.nodes.map((item, index) => (
                <div style={{ marginBottom: 50, marginTop: 50 }} key={item.id}>
                    <SingleProducts
                        reference={singleProductReference.current[index]}
                        productId={item.id}
                    />
                </div>
            ))}
        </Section>
    )
}

export default ProductSlider
