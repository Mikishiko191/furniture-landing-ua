import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { navigate } from 'gatsby'

// Components
import Card from '../../components/Card'

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

const ProductSlider = ({ productSectionRef }) => {
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

    const onClick = e => {
        console.log('on handle click', e)
        navigate(`/product?id=${e}`)
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
                        onHandleClick={() => onClick(item.id)}
                    />
                ))}
            </ProductList>
        </Section>
    )
}

export default ProductSlider
