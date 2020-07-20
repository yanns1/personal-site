import React from "react"
import { graphql, PageProps, Link } from "gatsby"

import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import StyledMore from "../components/styled/StyledMore";
// svgs
// @ts-ignore
import { ReactComponent as MoonSvg } from "../assets/moon.svg";
// @ts-ignore
import { ReactComponent as LightSvg } from "../assets/light.svg";

const More: React.FC<PageProps> = ({ location }) => {

  return (
    <Layout location={location}>
      <SEO title="More" description="More things about me and what I do" />
      <StyledMore>

        <div className="header">
          <h1>More</h1>
          <MoonSvg width="2rem" fill="currentColor" title="Moon icon" />
          {/* <LightSvg fill="currentColor" title="Light icon"/> */}
        </div>
        <h2>What I'm up to</h2>
        <p>This summer, I dedicate myself to freelance work. (by the way, if I can help you build amazing web apps, it would be a pleasure ! Contact me via the links at the bottom of the page.)</p>
        <p>Until I find something, I continue to specialize in web development, particularly in React.</p>
        <p>I’ll build new apps with that have requirements I’ve never encountered and share those that are useful.</p>
        <p>Along with that, I’ll continue to refine my apps and write blog posts !</p>
      </StyledMore>
    </Layout>
  )
}

export default More