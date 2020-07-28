import styled from "styled-components";

const StyledPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  & h1 {
    font-size: 2rem;
    font-weight: bold;
    max-width: 90%;
  }
  & svg {
    cursor: pointer;
    /* the padding is subtracted from the width of the svg */
    padding: 0.3rem;
    border-radius: var(--border-radius);
    transition: var(--transition-all);
    &:hover {
      color: ${(props) => (props.theme === "dark" ? "white" : "dark")};
      background-color: ${(props) =>
        props.theme === "dark" ? "#4F4F4F" : "#e0e0e0"};
    }
    &:active {
      color: ${(props) => (props.theme === "dark" ? "white" : "dark")};
      box-shadow: 0 0 0 2px var(--primary-dark2-color);
    }
  }
`;

export default StyledPageHeader;
