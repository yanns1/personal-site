import styled from 'styled-components';

const StyledProject = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  a {
    margin-bottom: 1rem;
    color: #2F80ED;
    transition: var(--transition-all);
    &:hover {
      text-decoration: underline;
    }
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default StyledProject;