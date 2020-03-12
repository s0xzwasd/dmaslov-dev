import React from "react";

import Link from "./Link";

export default {
  title: "Link",
  component: Link
};

const styles = {
  padding: "30px",
  backgroundColor: "black"
};

export const LinkCustom = () => (
  <div style={styles}>
    <Link>‍Link there</Link>
  </div>
);

export const LinkDefault = () => (
  <div style={styles}>
    <Link />
  </div>
);
