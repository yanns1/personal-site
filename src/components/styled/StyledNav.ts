import styled from "styled-components";

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 1rem;

  & .navlink {
    padding: 0.5rem;
    border-radius: var(--border-radius);
    transition: var(--transition-all);

    &:hover,
    &.active {
      background-color: var(--primary-dark1-color);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--primary-dark2-color);
    }
  }
`;

export default StyledNav;
