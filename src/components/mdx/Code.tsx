import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";

const preStyles = {
  fontFamily: "Dank Mono Regular",
  padding: "1rem",
  overflow: "auto",
  borderRadius: "var(--border-radius)",
  marginBottom: "1rem",
};

const Code: React.FC = ({ children }) => {
  // The first children are those of the pre element
  // Going one level deeper (children.props),
  // we get the props of the code element within,
  // wich as the code string as children
  // @ts-ignore
  const codeStr = children.props?.children.trim();
  if (!codeStr) {
    throw new Error(
      `A 'pre' tag has been used in markdown but we don't handle it at the moment. 'pre' tags are only intended for code blocks.`
    );
  }
  // @ts-ignore
  const language = children.props?.className
    ? children.props.className.replace(/language-/, "")
    : ("" as Language);

  return (
    // @ts-ignore
    <Highlight
      {...defaultProps}
      theme={nightOwl}
      code={codeStr}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, ...preStyles }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
