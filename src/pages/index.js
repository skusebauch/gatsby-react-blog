import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Dump from "../components/Dump"

export default ({ data }) => {
  return (
    <>
      <Layout>
        <Dump checkData={data} />
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter }) => (
          <React.Fragment key={id}>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
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
        fields {
          slug
        }
      }
    }
  }
`
