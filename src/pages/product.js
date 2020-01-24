import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProductPage = ({ location }) => {
    const urlParams = new URLSearchParams(location.search)

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

    const data = allFurnitureJson.nodes.find(
        item => item.id === urlParams.get('id')
    )

    return (
        <Layout>
            {!data ? (
                <div>Нечего не найдено</div>
            ) : (
                <>
                    <SEO title="Product title" />
                    <h1>{data.title}</h1>
                </>
            )}
        </Layout>
    )
}

export default ProductPage
