import styled from "styled-components";

const StyledNewsletter = styled.div`
  padding: 1rem;
  background-color: var(--primary-light-color);
  border-radius: var(--border-radius);

  /* If use "header", there's a conflict with "header" */
  /* class of the top level page that will override this one */
  .newsletter-header {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 1.5rem;
    & h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-left: 1rem;
    }
  }

  p {
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 1.5rem;
    }
  }

  form {
    input {
      /* override default */
      outline: none;
      font-size: 1rem;
      display: block;
      padding: 0.5rem;
      margin-bottom: 1rem;
      max-width: 100%;
      color: #828282;
      border: 1px solid #828282;
      border-radius: var(--border-radius);
      &:hover {
        box-shadow: 0 0 0 1px var(--smooth-dark);
      }
      &:focus {
        box-shadow: 0 0 0 1px var(--smooth-dark);
        color: var(--smooth-dark);
      }
    }

    .button-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      & button {
        /* override default */
        outline: none;
        border: none;
        font-size: 1.2rem;

        cursor: pointer;
        color: var(--smooth-white);
        background-color: #9b51e0;
        font-weight: bold;
        padding: 0.5rem;
        border-radius: var(--border-radius);
        transition: var(--transition-all);
        &:hover {
          background-color: var(--primary-dark1-color);
        }
        &:focus {
          box-shadow: 0 0 0 2px var(--primary-dark2-color);
        }
      }
    }
  }
`;

export default StyledNewsletter;
