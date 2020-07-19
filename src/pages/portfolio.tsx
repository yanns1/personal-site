import React from "react"
import { graphql, useStaticQuery, PageProps, Link } from "gatsby"
// components
import Img, { FluidObject } from "gatsby-image";
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import StyledProject from "../components/styled/StyledProject";
import StyledPortfolio from "../components/styled/StyledPortfolio";
// svgs
// @ts-ignore
import { ReactComponent as MoonSvg } from "../assets/moon.svg";
// @ts-ignore
import { ReactComponent as LightSvg } from "../assets/light.svg";

type ProjectsProps = {
  projects: {
    title: string;
    link: string;
    fluidImgData: any;
  }[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const projectsJsx = projects.map((project) =>
    <StyledProject key={project.title}>
      <h2>{project.title}</h2>
      <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
      <div className="img-wrapper">
        <Img
          fluid={project.fluidImgData}
          alt={project.title}
          style={{
            width: "35%"
          }}
        />
      </div>
    </StyledProject>
  );
  return (
    <>
      {projectsJsx}
    </>
  );
}

type DataProps = {
  deepworkImg: {
    childImageSharp: {
      fluid: FluidObject;
    }
  };
  randomQuotesImg: {
    childImageSharp: {
      fluid: FluidObject;
    }
  };
  learningPathImg: {
    childImageSharp: {
      fluid: FluidObject;
    }
  };
}



const Portfolio: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const projects = [
    { title: "Deep Work", link: "https://deepwork.netlify.app/", fluidImgData: data.deepworkImg.childImageSharp.fluid },
    { title: "Random Quotes", link: "https://deepwork.netlify.app/", fluidImgData: data.randomQuotesImg.childImageSharp.fluid },
    { title: "Learning Path", link: "https://learningpath.netlify.app/", fluidImgData: data.learningPathImg.childImageSharp.fluid },
  ]

  return (
    <Layout location={location}>
      <SEO title="Portfolio" description="List of the projects I've done" />
      <StyledPortfolio>
        <div className="header">
          <h1>Portfolio</h1>
          <div className="theme-icon-wrapper">
            <MoonSvg width="1.5rem" fill="currentColor" title="Moon icon" />
            {/* <LightSvg fill="currentColor" title="Light icon"/> */}
          </div>
        </div>
        <p>
          I currently have no professional experience but I've built several apps that I use on a daily basis.
      </p>
        <Projects projects={projects} />
        <p>...and my personal website that you’re currently beholding :)</p>
      </StyledPortfolio>
    </Layout>
  )
}

export default Portfolio

export const query = graphql`
  query ProjectImgsQuery {
    deepworkImg: file(relativePath: {eq: "deepwork.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    randomQuotesImg: file(relativePath: {eq: "random-quotes.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    learningPathImg: file(relativePath: {eq: "learning-path.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`