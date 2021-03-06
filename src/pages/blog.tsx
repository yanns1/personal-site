import React, { useState, useMemo } from "react";
import { PageProps, graphql } from "gatsby";
// components
import Layout from "../components/shared/Layout";
import SEO from "../components/shared/SEO";
import Newsletter from "../components/shared/Newsletter";
import StyledBlog from "../components/styled/StyledBlog";
import StyledPostCard from "../components/styled/StyledPostCard";
import StyledTags from "../components/styled/StyledTags";
import PageHeader from "../components/shared/PageHeader";
// contexts
import { useTheme } from "../components/contexts/ThemeContext";
// svgs
// @ts-ignore
import { ReactComponent as MoonSvg } from "../assets/moon.svg";
// @ts-ignore
import { ReactComponent as LightSvg } from "../assets/light.svg";
// @ts-ignore
import { ReactComponent as SearchSvg } from "../assets/search.svg";
// helpers
import { formatDate, checkFrontmatterData } from "../utils/helpers";

type PostCardsProps = {
  posts: {
    title: string;
    description: string;
    date: string;
    tag: string | null;
    slug: string;
  }[];
};

const PostCards: React.FC<PostCardsProps> = ({ posts }) => {
  const theme = useTheme();

  const postCardsJsx = posts.map((post) => {
    return (
      <StyledPostCard theme={theme} key={post.title} to={post.slug}>
        <h2>{post.title}</h2>
        <div className="date">{formatDate(post.date)}</div>
        <p className="description">{post.description}</p>
        {post.tag ? <span className="tag">{post.tag}</span> : null}
      </StyledPostCard>
    );
  });

  return <>{postCardsJsx}</>;
};

type TagsProps = {
  tags: string[];
  selectedTags: string[];
  onTagClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Tags: React.FC<TagsProps> = ({ tags, selectedTags, onTagClick }) => {
  const theme = useTheme();

  const tagsJsx = tags.map((tag) => {
    return (
      <div
        key={tag}
        className={selectedTags.includes(tag) ? "tag tag--selected" : "tag"}
        onClick={onTagClick}
        data-tag={tag}
      >
        {tag}
      </div>
    );
  });

  return <StyledTags theme={theme}>{tagsJsx}</StyledTags>;
};

type DataProps = {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
  allMdx: {
    edges: {
      node: {
        frontmatter: {
          title: string;
          description: string;
          date: string;
          tag: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
};

const Blog: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  data.allMdx.edges.forEach((nodeObj) => {
    checkFrontmatterData({
      title: nodeObj.node.frontmatter.title,
      date: nodeObj.node.frontmatter.date,
      description: nodeObj.node.frontmatter.description,
    });
  });

  const [searchVal, setSearchVal] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  const handleTagClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const tagEl = e.target as HTMLDivElement;
    const tagVal = tagEl.dataset.tag;
    const isNotClickedTag = (tag) => tag !== tagVal;

    setSelectedTags((prevState) => {
      return prevState.includes(tagVal)
        ? prevState.filter(isNotClickedTag)
        : [...prevState, tagVal];
    });
  };

  const posts = useMemo(() => {
    return data.allMdx.edges
      .map((nodeObj) => ({
        ...nodeObj.node.frontmatter,
        slug: nodeObj.node.fields.slug,
      }))
      .filter((post) => {
        const containsSearchVal =
          post.title.includes(searchVal) ||
          post.title.toLowerCase().includes(searchVal) ||
          post.title.toUpperCase().includes(searchVal);
        const hasSelectedTag =
          selectedTags.length > 0 ? selectedTags.includes(post.tag) : true;
        return containsSearchVal && hasSelectedTag;
      });
  }, [data, searchVal, selectedTags]);

  const tags = useMemo(() => {
    const filteredTags = data.allMdx.edges
      .map((nodeObj) => nodeObj.node.frontmatter.tag)
      .filter((tag) => tag !== null);

    const uniquifiedTags = Array.from(new Set(filteredTags));

    return uniquifiedTags;
  }, [data]);

  const theme = useTheme();

  return (
    <Layout location={location}>
      <SEO title="Blog" description="List of all blog posts" />
      <StyledBlog theme={theme}>
        <PageHeader title={"Blog"} />
        <p className="blog-intro">
          I write about Javascript and React mainly but I also write about
          programming in general and “life” things that goes through my head.
        </p>

        <div className="searchbar-wrapper">
          <div
            className={searchVal ? "searchbar searchbar--filled" : "searchbar"}
          >
            <input
              onChange={handleSearchChange}
              type="text"
              name="search"
              id="search"
              placeholder="Search posts"
            />
            <SearchSvg width="1.5rem" fill="currentColor" />
          </div>
        </div>

        <h2 className="tags-title">Search by tags</h2>
        <Tags
          tags={tags}
          selectedTags={selectedTags}
          onTagClick={handleTagClick}
        />

        <PostCards posts={posts} />

        <div className="newsletter-wrapper">
          <Newsletter />
        </div>
      </StyledBlog>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query BlogPostsDataQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
      edges {
        node {
          frontmatter {
            title
            description
            date
            tag
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
