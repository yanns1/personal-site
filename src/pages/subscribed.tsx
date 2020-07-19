import React from "react"
import { PageProps } from "gatsby"
// components
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import StyledSubscribed from "../components/styled/StyledSubscribed";

const Portfolio: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Subscribed" description="Confirm subscription to the newsletter" />
      <StyledSubscribed><h1>Confirmed subscription !</h1>
        <p>Again, thank you for joining the newsletter.</p>
        <p>You can expect to receive emails when a new post is published.</p>
        <p>If I want to send you other things in the future, I will contact you to request approval first.</p></StyledSubscribed>
    </Layout>
  )
}

export default Portfolio