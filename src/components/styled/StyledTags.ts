import styled from "styled-components";

const StyledTags = styled.div`
  max-width: 100%;
  margin-bottom: 2.5rem;
  .tag {
    display: inline-block;
    cursor: pointer;
    max-width: 100%;
    overflow-wrap: break-word;
    font-size: 0.75rem;
    color: var(--primary-dark2-color);
    padding: 0.25rem;
    border-radius: var(--border-radius);
    box-shadow: 0 0 0 1px var(--primary-dark2-color);
    transition: var(--transition-all);
    margin-top: 0.5rem;
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
    &:hover,
    &--selected {
      color: var(--smooth-white);
      box-shadow: none;
      background-color: var(--primary-dark2-color);
    }
  }
`;

export default StyledTags;
