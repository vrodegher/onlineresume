import React from "react";
import { Link, graphql } from "gatsby";
import styles from "./works.module.css"
import Img from 'gatsby-image';

import Layout from "../components/layout";

import SEO from "../components/seo";
import { skipPartiallyEmittedExpressions } from "typescript";


const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
  <Layout>

      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      
      <div className="row">
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} key={i} className="link" >
          
          <div className="column one-third">
            <div className={styles.card}>
              
            
                <div className="card-image"><Img fluid={node.frontmatter.logo.childImageSharp.fluid} /></div>
                <div className={styles.cardcontent}>
                <h1>{node.frontmatter.title}</h1>
                <span>{node.frontmatter.date}</span>
                <p>{node.excerpt}</p>
                
            
              </div>
            
             
            </div>
          </div>
         
        </Link>
      ))}
      </div>
  </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
query ListQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        fields{
          slug
        }
        excerpt(pruneLength: 100)
        frontmatter {
          title
          logo {
            childImageSharp {
              resize (width: 400){
                src
              }
              fluid(quality: 100, maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`

