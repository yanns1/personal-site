import React from "react";
import { graphql, PageProps, Link } from "gatsby";
// components
import Layout from "../components/shared/Layout";
import SEO from "../components/shared/SEO";
import StyledHome from "../components/styled/StyledHome";
import Newsletter from "../components/shared/Newsletter";
import PageHeader from "../components/shared/PageHeader";
// svgs
// @ts-ignore
import { ReactComponent as MoonSvg } from "../assets/moon.svg";
// @ts-ignore
import { ReactComponent as LightSvg } from "../assets/light.svg";

const Home: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="Home"
        description="Homepage of the site where I present myself"
      />
      <StyledHome>
        <PageHeader title={"Hey, I'm Yann Salmon"} />
        <p>
          I’m a french developer living in Nantes and a student in engineering
          (not yet specialized into IT but that’s the plan !).
        </p>
        <p>
          I love exploring things and currently, I’m passionate about building
          amazing softwares !
        </p>
        <p>
          Here you are at the source of all the tracks I’ve made and will make
          on the web. Everything related to me should be reachable from here.
        </p>
        <p>
          Check out my{" "}
          <Link className="self-made-link" to="/blog/">
            Blog
          </Link>
          ,{" "}
          <Link className="self-made-link" to="/portfolio/">
            Portfolio
          </Link>{" "}
          or the{" "}
          <Link className="self-made-link" to="/more/">
            More
          </Link>{" "}
          section to know what I’m up to.
        </p>
        <p>
          In addition, if you’ve read some of my blog posts and enjoy them, you
          can subscribe to my newsletter:
        </p>
        <div className="newsletter-wrapper">
          <Newsletter />
        </div>
      </StyledHome>
    </Layout>
  );
};

export default Home;
