import styled from "styled-components";
import StyledContentHeader from "./StyledContentHeader";

const StyledPost = styled(StyledContentHeader)`
  line-height: 1.6;
  font-family: "Merriweather";
  /* Override StyledContentHeader */
  .header {
    margin-bottom: 0;
  }
  .post-info {
    color: #828282;
    margin-bottom: 3rem;
    & .clock-icon {
      /* align the icon with text baseline */
      position: relative;
      top: 0.125em;
    }
  }
`;

export default StyledPost;
