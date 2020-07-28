import styled from "styled-components";

const Contacts = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  column-gap: 1rem;

  a {
    color: ${(props) => (props.theme === "dark" ? "#BDBDBD" : "inherited")};
    &:hover {
      /* svgs inherit that color */
      color: ${(props) => (props.theme === "dark" ? "white" : "black")};
    }

    &:focus {
      outline: none;
      /* svgs inherit that color */
      color: ${(props) => (props.theme === "dark" ? "white" : "black")};
    }
  }
`;

export default Contacts;
