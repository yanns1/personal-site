import React from "react"
import Img from "gatsby-image";
import { Link, useStaticQuery, graphql } from "gatsby"

type Props = {
  location: object;
  title: string;
}

// TODO
const Layout: React.FC<Props> = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query AvatarQuery {
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <>
      <header>
        <Img
          fixed={data.avatar.childImageSharp.fixed}
          alt={"Yann Salmon"}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </header>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout
