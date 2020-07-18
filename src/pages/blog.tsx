import React from "react"
import { graphql, PageProps, Link } from "gatsby"

import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"

const Blog: React.FC<PageProps> = ({ location }) => {

  return (
    <Layout location={location}>
      <SEO title="Blog" description="List of all blog posts" />
      <h1>Blog</h1>
    </Layout>
  )
}

export default Blog