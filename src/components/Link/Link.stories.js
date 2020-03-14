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
    <Link to='https://www.npmjs.com/package/eslint-config-react-app'>‍Link there</Link>
  </div>
);
