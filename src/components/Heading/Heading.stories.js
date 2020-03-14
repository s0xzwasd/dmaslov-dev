import React from "react";

import Heading from "./Heading";

export default {
  title: "Heading",
  component: Heading
};

const styles = {
  padding: "30px",
  backgroundColor: "black"
};

export const WithTextLarge = () => (
  <div style={styles}>
    <Heading size='large'>Hello, Heading here!</Heading>
  </div>
);

export const WithTextMedium = () => <Heading size='medium'>Hello, Heading here!</Heading>;

export const WithoutText = () => (
  <div style={styles}>
    <Heading />
  </div>
);
