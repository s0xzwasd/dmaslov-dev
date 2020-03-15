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
  label: PropTypes.string
};

Icon.defaultProps = {
  label: "Emoji"
};

export default Icon;
