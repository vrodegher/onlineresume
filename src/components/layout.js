/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Footer from "./footer"

import Header from "./header"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        
        <div
          style={{
            margin: `3rem auto`,
            maxWidth: 960,
            padding: `2rem 0.5rem`
            
          }}
        >
        { <Header siteTitle={data.site.siteMetadata.title} /> }
          <main>{children}</main>
          <Footer />
        </div>
        
        </>
    )}

  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
