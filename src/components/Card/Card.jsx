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
  color: PropTypes.oneOf(["default", "about", "light", "idea", "process", "implemented", "resource", "important"]),
  colorOnDark: PropTypes.bool,
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkTitle: PropTypes.string
};

Card.defaultProps = {
  colorOnDark: false,
  description: "Social and email",
  heading: "Card title",
  subheading: "Github",
  icon: "👨‍",
  link: "https://www.notion.so/s0xzwasd/Resume-76a1d193249145c7822ce455942786f7",
  linkTitle: ""
};

export default Card;
