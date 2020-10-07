import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Dump from "../components/Dump"
import styled from "styled-components"

const IndexWrapper = styled.main``

const PostWrapper = styled.div``

export default ({ data }) => {
  return (
    <Layout>
      <IndexWrapper>
        <Dump checkData={data} />
        {data.allMdx.nodes.map(({ fields, id, excerpt, frontmatter }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
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
