import styled from "styled-components";
import { Link } from "gatsby";

const StyledPostCard = styled(Link)`
  --vertical-space: 0.5rem;
  display: block;
  margin-bottom: 2.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) =>
      props.theme === "dark"
        ? "var(--primary-light-color)"
        : "var(--primary-dark2-color)"};
  }

  .date {
    font-size: 0.75rem;
    color: #828282;
    margin-bottom: var(--vertical-space);
    margin-bottom: var(--vertical-space);
  }

  .description {
    margin-bottom: var(--vertical-space);
  }

  /* To keep in sync with StyledTags */
  .tag {
    display: inline-block;
    font-size: 0.75rem;
    color: ${(props) =>
      props.theme === "dark"
        ? "var(--primary-light-color)"
        : "var(--primary-dark2-color)"};
    padding: 0.25rem;
    border-radius: var(--border-radius);
    box-shadow: 0 0 0 1px
      ${(props) =>
        props.theme === "dark"
          ? "var(--primary-light-color)"
          : "var(--primary-dark2-color)"};
  }
`;

export default StyledPostCard;
