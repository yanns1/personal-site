import styled from "styled-components";

const StyledToC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  ul {
    & li {
      color: var(--primary-dark1-color);
      list-style-type: disc;
      &:hover {
        text-decoration: underline;
      }
      &.depth-1 {
      }
      &.depth-2 {
        margin-left: 1rem;
      }
      &.depth-3 {
        margin-left: 2rem;
      }
      &.depth-4 {
        margin-left: 3rem;
      }
      &.depth-5 {
        margin-left: 4rem;
      }
      &.depth-6 {
        margin-left: 5rem;
      }
    }
  }
`;

export default StyledToC;
