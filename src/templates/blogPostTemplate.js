import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Dump from "../components/Dump"

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout>
      <Dump previous={previous}></Dump>
      <Dump next={next}></Dump>
      <Dump pgContext={pageContext}></Dump>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`
