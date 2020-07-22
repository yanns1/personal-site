import React from "react";

const CenteredImg: React.FC = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => (
  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <img {...props} />
  </div>
);

export default CenteredImg;
