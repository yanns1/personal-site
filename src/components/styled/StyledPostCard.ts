import styled from "styled-components";
import { Link } from "gatsby";

const StyledPostCard = styled(Link)`
  --vertical-space: 0.5rem;
  display: block;
  margin-bottom: 2.5rem;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-dark2-color);
  }

  .date {
    font-size: 0.75rem;
    color: #4f4f4f;
    margin-bottom: var(--vertical-space);
    margin-bottom: var(--vertical-space);
  }

  .description {
    margin-bottom: var(--vertical-space);
  }

  .tag {
    display: inline-block;
    font-size: 0.75rem;
    color: var(--primary-dark2-color);
    padding: 0.25rem;
    border-radius: var(--border-radius);
    box-shadow: 0 0 0 1px var(--primary-dark2-color);
    /* transition: var(--transition-all);
  &:hover {
    color: var(--smooth-white);
    box-shadow: none;
    background-color: var(--primary-dark2-color);
  } */
  }
`;

export default StyledPostCard;
