/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'

// Components
import Header from './header'
import Footer from './Footer'
import './layout.css'
import Modal from './Modal'

// const Container = styled.main`
//     margin: 0 auto;
//     max-width: 960px;
//     padding: 0 1.0875rem 1.45rem;
// `

const Layout = ({ children }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false)
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

    return (
        <>
            <Header
                siteTitle={data.site.siteMetadata.title}
                onHandleOpenModal={onHandleOpenModal}
            />
            <main>{children}</main>
            <Modal
                modalIsOpen={modalIsOpen}
                onHandelCloseModal={onHandelCloseModal}
            />
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
