import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Heading from "../Heading";
import Description from "../Description";
import Link from "../Link";
import styles from "./Card.module.scss";

const Card = ({ color, description, heading, icon, link, linkTitle }) => {
  return (
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
    </section>
  );
};

Card.propTypes = {
  color: PropTypes.oneOf(["important"]),
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkTitle: PropTypes.string
};

Card.defaultProps = {
  description: "Social and email",
  heading: "Card title",
  icon: "👨‍",
  link: "https://www.notion.so/s0xzwasd/Resume-76a1d193249145c7822ce455942786f7",
  linkTitle: ""
};

export default Card;
