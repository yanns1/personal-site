import React from "react"
import { graphql, PageProps, Link } from "gatsby"

import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"

type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    }
  }
}

const NotFoundPage: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" description="Page not found." />
      <main>
        <h1>Oops! Page not found.</h1>
        <p>Click <Link to='/home'>here</Link> to go back to the homepage.</p>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
