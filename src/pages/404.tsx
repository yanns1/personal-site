import React from "react";
import { PageProps, Link } from "gatsby";
// components
import Layout from "../components/shared/Layout";
import SEO from "../components/shared/SEO";
import Styled404 from "../components/styled/Styled404";
import PageHeader from "../components/shared/PageHeader";
// svgs
// @ts-ignore
import { ReactComponent as MoonSvg } from "../assets/moon.svg";
// @ts-ignore
import { ReactComponent as LightSvg } from "../assets/light.svg";

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found" description="Page not found." />
      <Styled404>
        <PageHeader title={"Oops! Page not found."} />
        <p>You hit an inexistent route.</p>
        <p>
          <Link className="self-made-link" to="/">
            Go back to the homepage
          </Link>{" "}
          or use the navigation at the top of the page.
        </p>
      </Styled404>
    </Layout>
  );
};

export default NotFoundPage;
