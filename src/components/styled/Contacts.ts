import styled from "styled-components"

const Contacts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 1rem;

  a {
    &:hover {
      /* svgs inherit that color */
      color: black;
    }

    &:focus {
      outline: none;
      /* svgs inherit that color */
      color: black;
    }
  }

`

export default Contacts;