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

export const WithText = () => (
  <div style={styles}>
    <Heading style={styles}>Hello, I'm Heading here!</Heading>
  </div>
);

export const WithoutText = () => (
  <div style={styles}>
    <Heading></Heading>
  </div>
);
