import React from "react"
import { graphql, PageProps, Link } from "gatsby"

import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"

const Portfolio: React.FC<PageProps> = ({ location }) => {

  return (
    <Layout location={location}>
      <SEO title="Portfolio" description="List of the projects I've done" />
      <h1>Portfolio</h1>
    </Layout>
  )
}

export default Portfolio