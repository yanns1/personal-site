import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Code from "./Code";

/* "Global style comp. for mdx pages" */
const StyledMdx = styled.div`
  --heading-vertical-margin: 2rem;
  --main-margin-bottom: 1.5rem;

  word-break: break-word;

  /* anchor icon of headings */
  .anchor {
    /* will be passed to svg inside a tag */
    /* doesn't work with color */
    fill: currentColor;
    opacity: 0.5;
    padding-right: 0.5rem;
    font-size: 1rem;
    &:hover {
      opacity: 1;
    }
  }

  /* Lists */
  /* 6 lvl deep supported */
  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
  ul,
  ol {
    margin-bottom: var(--main-margin-bottom);
    margin-left: 3rem;
    & ul,
    & ol {
      margin-left: 1rem;
      & ul,
      & ol {
        margin-left: 1rem;
        & ul,
        & ol {
          margin-left: 1rem;
          & ul,
          & ol {
            margin-left: 1rem;
            & ul,
            & ol {
              margin-left: 1rem;
            }
          }
        }
      }
    }
  }
`;

const H1 = styled.h1`
  display: flex;
  align-items: center;
  margin: var(--heading-vertical-margin) 0;
  font-size: 2rem;
  font-weight: bold;
`;

const H2 = styled.h2`
  display: flex;
  align-items: center;
  margin: var(--heading-vertical-margin) 0;
  font-size: 1.7rem;
  font-weight: bold;
`;

const H3 = styled.h3`
  display: flex;
  align-items: center;
  margin: var(--heading-vertical-margin) 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const H4 = styled.h4`
  display: flex;
  align-items: center;
  margin: var(--heading-vertical-margin) 0;
  font-size: 1.3rem;
  font-weight: bold;
`;

const H5 = styled.h5`
  display: flex;
  align-items: center;
  margin: var(--heading-vertical-margin) 0;
  font-size: 1.1rem;
  font-weight: bold;
`;

const H6 = styled.h6`
  display: flex;
  align-items: center;
  margin: var(--heading-vertical-margin) 0;
  font-size: 1rem;
  font-weight: bold;
`;

const P = styled.p`
  margin-bottom: var(--main-margin-bottom);
`;

const Hr = styled.hr`
  margin-bottom: var(--main-margin-bottom);
  opacity: 0.5;
  width: 75%;
`;

const Em = styled.em`
  font-style: italic;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const BlockQuote = styled.blockquote`
  margin-bottom: var(--main-margin-bottom);
  font-style: italic;
  margin-left: 3rem;
  opacity: 0.75;
  position: relative;
  &:before {
    content: "";
    height: 100%;
    position: absolute;
    top: 0;
    left: -1.5rem;
    border: 0.1rem solid var(--primary-dark2-color);
  }
`;

type AProps = {
  children?: React.ReactNode[];
  className?: string;
  href?: string;
};

const A: React.FC<AProps> = (props) => {
  if (props.className?.includes("anchor")) {
    return <Link to={props.href} {...props} />;
  } else {
    return (
      <a
        className="self-made-link"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      ></a>
    );
  }
};

const InlineCode = styled.code`
  font-style: italic;
  color: #7b0505;
`;

// https://mdxjs.com/table-of-components
// tables not supported
const mdxComponents = {
  wrapper: (props) => <StyledMdx {...props} />,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Hr,
  em: Em,
  strong: Strong,
  thematicBreak: Hr,
  blockquote: BlockQuote,
  a: A,
  p: P,
  pre: Code,
  inlineCode: InlineCode,
};

export default mdxComponents;
