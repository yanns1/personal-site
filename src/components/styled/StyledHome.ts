import styled from 'styled-components';

const StyledHome = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    & h1 {
      font-size: 2rem;
      font-weight: bold;
    }
    & .theme-icon-wrapper {
      cursor: pointer;
      padding: 0.25rem;
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

  p {
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  .link {
    color: #2F80ED;
    transition: var(--transition-all);
    &:hover {
      text-decoration: underline;
    }
  }

  .newsletter-wrapper {
    margin: 0 15%;
  }
`

export default StyledHome;