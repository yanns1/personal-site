import React from "react"
import { graphql, PageProps, Link } from "gatsby"

import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"

const Home: React.FC<PageProps> = ({ location }) => {

  return (
    <Layout location={location}>
      <SEO title="Home" description="Homepage of the site where I present myself" />
      <h1>Home</h1>
    </Layout>
  )
}

export default Home