import styled from "styled-components";
import StyledContentHeader from "./StyledContentHeader";

const StyledHome = styled(StyledContentHeader)`

  p {
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  .newsletter-wrapper {
    margin: 0 15%;
  }
`;

export default StyledHome;
