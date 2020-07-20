import styled from "styled-components";
import StyledContentHeader from "./StyledContentHeader";

const StyledPortfolio = styled(StyledContentHeader)`
  p {
    &:first-of-type {
      margin-bottom: 2rem;
    }
    &:last-of-type {
      margin-top: 2rem;
    }
  }
`;

export default StyledPortfolio;
