import React from "react";
import PropTypes from "prop-types";

import styles from "./Icon.module.scss";

const Icon = ({ children, label }) => (
  <span className={styles.icon} aria-label={label} role='img'>
    {children}
  </span>
);

Icon.propTypes = {
  children: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

Icon.defaultProps = {
  children: "🌗",
  label: "Moon in strange phase"
};

export default Icon;
