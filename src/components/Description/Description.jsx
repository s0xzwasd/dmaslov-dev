import React from "react";
import PropTypes from "prop-types";
import styles from "./Description.module.scss";

const Description = ({ className, children }) => {
  return <p className={`${className} ${styles.description}`}>{children}</p>;
};

Description.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired])
};

Description.defaultProps = {
  className: "desc",
  children: "Description default"
};

export default Description;
