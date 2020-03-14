import React from "react";
import PropTypes from "prop-types";

import styles from "./Link.module.scss";

const Link = ({ children, to, title, isBlank }) => (
  <a
    className={styles.link}
    href={to}
    target={isBlank ? "_blank" : null}
    rel={isBlank ? "noopener noreferrer" : null}
    title={title}
  >
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  isBlank: PropTypes.bool
};

Link.defaultProps = {
  title: "Default title",
  isBlank: false
};

export default Link;
