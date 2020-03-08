import React from "react";
import PropTypes from "prop-types";
import styles from "./Description.module.scss";

const Description = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};

Description.propTypes = {
  children: PropTypes.string.isRequired
};

Description.defaultProps = {
  children: "Description default"
};

export default Description;
