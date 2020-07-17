import React from "react"
import { graphql, PageProps } from "gatsby"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"

type DataProps = {
  site: { siteMetadata: { title: string; } };
  markdownRemark: {
    html: string;
    tableOfContents: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
    }
  }
}

const Post: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`
