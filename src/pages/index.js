import React from "react"
import { graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Layout from "../components/Layout"

export default ({ data }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Layout>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter }) => (
          <React.Fragment key={id}>
            <h1>{frontmatter.title}</h1>
            <p>{excerpt}</p>
          </React.Fragment>
        ))}
      </Layout>
    </>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          date
          published
          title
        }
        excerpt(pruneLength: 250)
        id
      }
    }
  }
`
