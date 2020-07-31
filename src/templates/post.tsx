import React from "react";
import { graphql, PageProps, Link } from "gatsby";
// mdx
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import mdxComponents from "../components/mdx/mdxComponents";
// components
import Layout from "../components/shared/Layout";
import SEO from "../components/shared/SEO";
import Newsletter from "../components/shared/Newsletter";
import StyledPost from "../components/styled/StyledPost";
import StyledToC from "../components/styled/StyledToC";
import CenteredImg from "../components/mdx/CenteredImg";
import PageHeader from "../components/shared/PageHeader";
// contexts
import { useTheme } from "../components/contexts/ThemeContext";
// svgs
// @ts-ignore
import { ReactComponent as MoonSvg } from "../assets/moon.svg";
// @ts-ignore
import { ReactComponent as LightSvg } from "../assets/light.svg";
// @ts-ignore
import { ReactComponent as ClockSvg } from "../assets/clock.svg";
// helpers
import { formatDate, checkFrontmatterData } from "../utils/helpers";

type ToCDepth = 1 | 2 | 3 | 4 | 5 | 6;

type Heading = { url: string; title: string; depth: ToCDepth };

type ToCProps = {
  toc: Array<Heading | undefined>;
};

const ToC: React.FC<ToCProps> = ({ toc }) => {
  if (toc.length === 0) {
    throw new Error(
      "You shouldn't create a table of contents because there's no heading in the post."
    );
  }

  const theme = useTheme();

  // use url as key because if there are 2 identical (or more)
  // headings, title will be the same but not the url
  // (thx to the gatsby-remark-autolink-headers plugin)
  const listItems = toc.map((heading) => (
    <li key={heading.url} className={`depth-${heading.depth}`}>
      <Link to={heading.url}>{heading.title}</Link>
    </li>
  ));
  return (
    <StyledToC theme={theme}>
      <h2>Table of Contents</h2>
      <ul>{listItems}</ul>
    </StyledToC>
  );
};

// All these components will be globally available in each .mdx file
const shortcodes = { ToC, CenteredImg };

// keep it outside of the component because making
// the obj inline in the jsx will cause a rerender each time
// (because not the same obj reference), thus creating
// perf issues
const allMdxComp = { ...mdxComponents, ...shortcodes };

type Item = {
  url: string;
  title: string;
  items?: Item[];
};

type ToCData = {
  items: Item[];
};

/**
 * TODO: Better version for createToC
 * returned headings are in ascending order of depth
 * but sometimes we may have a heading 1 after a heading 2 for example.
 * Problem is, the hierarchy will not be maintained.
 * So need to find another way to recurse.
 */
const createToC = (
  tocData: ToCData | Item,
  postUrl: string,
  newToc: Heading[] = [],
  currDepth: ToCDepth = 1
): Heading[] => {
  const currHeadings = tocData?.items;
  if (currHeadings && currDepth < 7) {
    const newHeadings = currHeadings
      .reduce((acc: Heading[], item) => {
        const newHeading = {
          url: postUrl + item.url,
          title: item.title,
          depth: currDepth,
        };
        return item.items ? [...acc, null] : [...acc, newHeading];
      }, [])
      .filter((newHeading) => newHeading !== null);

    const updatedToc = [...newToc, ...newHeadings];

    const nextDepthItem = currHeadings.find((heading) => heading.items);

    return createToC(
      nextDepthItem,
      postUrl,
      updatedToc,
      (currDepth + 1) as ToCDepth
    );
  } else {
    return newToc;
  }
};

type DataProps = {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
  mdx: {
    body: string;
    timeToRead: number | null;
    tableOfContents: ToCData; // can be empty obj
    frontmatter: {
      title: string; // can be empty str
      date: string | null;
      description: string | null;
    };

    fields: {
      slug: string;
    };
  };
};

const Post: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const post = data.mdx;

  // Check data
  if (post.timeToRead === null) {
    throw new Error(
      "timeToRead is null, which means that there's too little content in the post."
    );
  }
  checkFrontmatterData({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    description: post.frontmatter.description,
  });

  const postUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000" + post.fields.slug
      : data.site.siteMetadata.siteUrl + post.fields.slug;

  const preparedToC = createToC(post.tableOfContents, postUrl);

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <StyledPost>
        <PageHeader title={post.frontmatter.title} />
        <div className="post-info">
          <span className="date">{formatDate(post.frontmatter.date)}</span>
          <span> - </span>
          {/* "1em" to make the svg adopt the current font size */}
          <ClockSvg className="clock-icon" width="1em" fill="currentColor" />
          {/* The first space is needed */}
          <span className="time-to-read">
            {" "}
            {post.timeToRead.toString() + "min read"}
          </span>
        </div>
        <MDXProvider components={allMdxComp}>
          <MDXRenderer toc={preparedToC}>{post.body}</MDXRenderer>
        </MDXProvider>
        <Newsletter />
      </StyledPost>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      timeToRead
      tableOfContents
      frontmatter {
        title
        date
        description
      }
      fields {
        slug
      }
    }
  }
`;
