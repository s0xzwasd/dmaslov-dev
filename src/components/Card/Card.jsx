import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import Heading from "../Heading";
import Description from "../Description";
import Link from "../Link";

import styles from "./Card.module.scss";

const Card = ({ color, description, heading, subheading, icon, link, linkTitle, colorOnDark }) => (
  <section className={`${styles.card} ${styles[color]}`}>
    <Icon>{icon}</Icon>
    <Heading className={styles.heading}>{heading}</Heading>
    <div className={styles.type}>
      <Description>Type:</Description>
      <Description className={styles.content}>{description}</Description>
    </div>
    <div className={styles.link}>
      <Description>Specs:</Description>
      <Description className={styles.content}>
        <Link to={link} title={linkTitle} isBlank>
          {link}
        </Link>
      </Description>
    </div>
    <h3 className={colorOnDark ? `${styles["dark-vertical"]} ${styles.vertical}` : styles.vertical}>{subheading}</h3>
  </section>
);

Card.propTypes = {
  color: PropTypes.oneOf(["default", "accent", "about", "light", "idea", "process", "implemented", "resource", "important", "so", "jetbrains"]),
  colorOnDark: PropTypes.bool,
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkTitle: PropTypes.string
};

Card.defaultProps = {
  color: "default",
  colorOnDark: false,
  subheading: "Github",
  linkTitle: ""
};

export default Card;
