import styled from 'styled-components';

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;

  header {
    background-color: var(--primary-light-color);
    padding: 1rem var(--page-margin);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .avatar {
      border-radius: 50%;
      transition: var(--transition-all);

      &:hover, &:focus, &.active {
        outline: none;
        box-shadow: 0 0 0 2px var(--primary-dark2-color);
      }
    }

    & nav {
      display: grid;
      grid-template-columns: repeat(3, auto);
      column-gap: 1rem;

      & .navlink {
        padding: 0.5rem;
        border-radius: var(--border-radius);
        transition: var(--transition-all);

        &:hover, &.active {
          background-color: var(--primary-dark1-color);
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 2px var(--primary-dark2-color);
        }
      }
    }

  }

  main {
    flex: 1;
    margin: 2rem var(--page-margin);
    border: 1px solid black;
  }

  footer {
    padding: 1rem var(--page-margin);
    background-color: #828282;
    display: flex;
    justify-content: center;
    align-items: center;
  }


`

export default StyledLayout;