module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": `<rootDir>/jest-preprocess.js`,
  },
  // need to mock gatsby (graphql, Link, StaticQuery etc) (3rd key value pair)
  // errors like: "It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away..." are a sign of this need
  // https://github.com/gatsbyjs/gatsby/issues/12007#issuecomment-467019177
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.ts`,
    ".+\\.([j|t]sx)$": `<rootDir>/__mocks__/gatsby.ts`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  // https://stackoverflow.com/questions/55794280/jest-fails-with-unexpected-token-on-import-statement
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-plugin-mdx)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  // setupFiles: [`<rootDir>/loadershim.js`],
};
