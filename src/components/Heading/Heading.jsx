import React from "react";
import PropTypes from "prop-types";
import styles from "./Heading.module.scss";

const Heading = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

Heading.propTypes = {
  children: PropTypes.string.isRequired
};

Heading.defaultProps = {
  children: "Heading default"
};

export default Heading;
