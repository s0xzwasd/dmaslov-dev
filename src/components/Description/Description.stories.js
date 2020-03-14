import React from "react";

import Description from "./Description";

export default {
  title: "Description",
  component: Description
};

const styles = {
  padding: "30px",
  backgroundColor: "black"
};

export const WithText = () => (
  <div style={styles}>
    <Description>Hello, Description here!</Description>
  </div>
);

export const WithoutText = () => (
  <div style={styles}>
    <Description />
  </div>
);
