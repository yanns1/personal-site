import React from "react"
import { graphql, PageProps, Link } from "gatsby"

import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"

const More: React.FC<PageProps> = ({ location }) => {

  return (
    <Layout location={location}>
      <SEO title="More" description="More things about me and what I do" />
      <h1>More</h1>
    </Layout>
  )
}

export default More