import styled from "styled-components";
import StyledContentHeader from "./StyledContentHeader";

const StyledBlog = styled(StyledContentHeader)`
  .blog-intro {
    margin: 1rem 0;
  }

  .newsletter-wrapper {
    margin: 0 15%;
  }

  .searchbar-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0;
  }

  .searchbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--border-radius);
    color: #828282;
    box-shadow: 0 0 0 1px
      ${(props) =>
        props.theme === "dark"
          ? "var(--primary-dark2-color)"
          : "var(--primary-light-color)"};
    min-width: min-content;
    width: 50%;
    transition: var(--transition-all);
    & #search {
      border: none;
      outline: none;
      background-color: transparent;
      padding: 0.5rem;
      width: 90%;
    }
    & svg {
      padding: 0.3rem;
    }
    &:hover {
      box-shadow: 0 0 0 1px
        ${(props) =>
          props.theme === "dark"
            ? "var(--primary-light-color)"
            : "var(--primary-dark2-color)"};
    }
    &--filled {
      box-shadow: 0 0 0 1px
        ${(props) =>
          props.theme === "dark"
            ? "var(--primary-light-color)"
            : "var(--primary-dark2-color)"};
      color: ${(props) =>
        props.theme === "dark" ? "var(--smooth-white)" : "var(--smooth-dark)"};
    }
    & input {
      color: inherit;
    }
  }

  .tags-title {
    font-weight: bold;
  }
`;

export default StyledBlog;
