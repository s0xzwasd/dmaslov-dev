import React from "react";
import PropTypes from "prop-types";

import styles from "./Heading.module.scss";

const Heading = ({ className, children, size }) => (
  <h2 className={`${className} ${styles.heading} ${styles[size]}`}>{children}</h2>
);

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["large", "medium"])
};

Heading.defaultProps = {
  className: "",
  size: "large"
};

export default Heading;
