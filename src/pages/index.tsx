import React from "react"
import { graphql, PageProps, Link } from "gatsby"
// components
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import StyledHome from "../components/styled/StyledHome";
// svgs
// @ts-ignore
import { ReactComponent as MoonSvg } from "../assets/moon.svg";
// @ts-ignore
import { ReactComponent as LightSvg } from "../assets/light.svg";
import Newsletter from "../components/shared/newsletter";

const Home: React.FC<PageProps> = ({ location }) => {

  return (
    <Layout location={location}>
      <SEO title="Home" description="Homepage of the site where I present myself" />
      <StyledHome>
        <div className="header">
          <h1>Hey, I'm Yann Salmon</h1>
          <MoonSvg width="2rem" fill="currentColor" title="Moon icon" />
          {/* <LightSvg fill="currentColor" title="Light icon"/> */}
        </div>
        <p>
          I’m a french developer living in Nantes and a student in engineering (not yet specialized into IT but that’s the plan !).
      </p>
        <p>
          I love exploring things and currently, I’m passionate about building amazing softwares !
      </p>
        <p>
          Here you are at the source of all the tracks I’ve made and will make on the web. Everything related to me should be reachable from here.
      </p>
        <p>
          Check out my <Link className="self-made-link" to="/blog/">Blog</Link>, <Link className="self-made-link" to="/portfolio/">Portfolio</Link> or the <Link className="self-made-link" to="/more/">More</Link> section to know what I’m up to.
      </p>
        <p>
          In addition, if you’ve read some of my blog posts and enjoy them, you can subscribe to my newsletter:
      </p>
        <div className="newsletter-wrapper">
          <Newsletter />
        </div>
      </StyledHome>
    </Layout>
  )
}

export default Home