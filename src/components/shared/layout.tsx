import React from "react";
// components
import Avatar from "gatsby-image";
import { Link, useStaticQuery, graphql } from "gatsby";
import GlobalStyle from "../styled/GlobalStyle";
import StyledLayout from "../styled/StyledLayout";
import StyledNav from "../styled/StyledNav";
import Contacts from "../styled/Contacts";
// svgs
// @ts-ignore
import { ReactComponent as UpworkSvg } from "../../assets/upwork.svg";
// @ts-ignore
import { ReactComponent as TwitterSvg } from "../../assets/twitter.svg";
// @ts-ignore
import { ReactComponent as GithubSvg } from "../../assets/github.svg";
// @ts-ignore
import { ReactComponent as EmailSvg } from "../../assets/email.svg";
// @ts-ignore
import { ReactComponent as RssSvg } from "../../assets/rss.svg";

type NavProps = {
  navlinks: {
    name: string;
    to: string;
  }[];
};

const Nav: React.FC<NavProps> = ({ navlinks }) => {
  const navlinksJsx = navlinks.map((navlink) => (
    <Link
      className="navlink"
      key={navlink.name}
      to={navlink.to}
      activeClassName="active"
    >
      {navlink.name}
    </Link>
  ));
  return <StyledNav>{navlinksJsx}</StyledNav>;
};

type LayoutProps = {
  location: object;
};

const navlinks = [
  { name: "Blog", to: "/blog/" },
  { name: "Portfolio", to: "/portfolio/" },
  { name: "More", to: "/more/" },
];

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query AvatarQuery {
      file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <StyledLayout>
        <header>
          <Link to="/" className="avatar" activeClassName="active">
            <Avatar
              fluid={data.file.childImageSharp.fluid}
              alt={"Yann Salmon"}
              style={{
                width: "3rem",
                background: "#C4C4C4",
                borderRadius: "50%",
              }}
            />
          </Link>
          <Nav navlinks={navlinks} />
        </header>
        <main>{children}</main>
        <footer>
          <Contacts>
            {/* Find link in: Find work => Profile => Profile link on the right */}
            <a
              href="https://www.upwork.com/o/profiles/users/~01a97d9c6d2047e133/"
              target="_blank"
              rel="noopener"
              title="Upwork"
            >
              <UpworkSvg width="1.7rem" fill="currentColor" />
            </a>
            <a
              href="https://twitter.com/YannSalmon1"
              target="_blank"
              rel="noopener"
              title="My Twitter account"
            >
              <TwitterSvg width="1.7rem" fill="currentColor" />
            </a>
            <a
              href="https://github.com/yanns1/personal-site"
              target="_blank"
              rel="noopener"
              title="Site repo on Github"
            >
              <GithubSvg width="1.7rem" fill="currentColor" />
            </a>
            <a
              href="mailto:yannsalmon.pro@gmail.com"
              target="_blank"
              rel="noopener"
              title="Email me"
            >
              <EmailSvg width="1.7rem" fill="currentColor" />
            </a>
            <Link to="/rss.xml" title="RSS Feed">
              <RssSvg width="1.7rem" fill="currentColor" />
            </Link>
          </Contacts>
        </footer>
      </StyledLayout>
    </>
  );
};

export default Layout;
