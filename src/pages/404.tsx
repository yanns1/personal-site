import React from "react"
import { PageProps, Link } from "gatsby"
// components
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import Styled404 from "../components/styled/Styled404";

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found" description="Page not found." />
      <Styled404>
        <h1>Oops! Page not found.</h1>
        <p>You hit an inexistent route.</p>
        <p><Link className="self-made-link" to='/'>Go back to the homepage</Link> or use the navigation at the top of the page.</p>

      </Styled404>
    </Layout>
  )
}

export default NotFoundPage
