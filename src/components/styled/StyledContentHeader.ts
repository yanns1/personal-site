import styled from "styled-components";

const StyledContentHeader = styled.div`
.header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2rem;
    & h1 {
      font-size: 2rem;
      font-weight: bold;
    }
    & svg {
      cursor: pointer;
      /* the padding is subtracted from the width of the svg */
      padding: 0.3rem;
      border-radius: var(--border-radius);
      transition: var(--transition-all);
      &:hover {
        color: black;
        background-color: #E0E0E0;
      }
      &:active {
        color: black;
        box-shadow: 0 0 0 2px var(--primary-dark2-color);
      }
    }
  }
`

export default StyledContentHeader;