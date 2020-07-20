import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type MetaObj =
  | { name: string; content: string; property?: undefined }
  | { property: string; content: string; name?: undefined };

type Props = {
  description: string;
  lang?: string;
  meta?: MetaObj[];
  title: string;
};

const SEO: React.FC<Props> = ({
  description,
  lang = "en",
  meta = [],
  title,
}) => {
  const {
    site: { siteMetadata: data },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    // @ts-ignore
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${data.title} | %s`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
