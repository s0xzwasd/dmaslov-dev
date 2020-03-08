import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Heading from "../Heading";
import Description from "../Description";
import styles from "./Card.module.scss";

const Card = ({ description, heading, icon, link }) => {
  return (
    <section className={styles.card}>
      <Icon>{icon}</Icon>
      <Heading className={styles.heading}>{heading}</Heading>
      <div className={styles.type}>
        <Description>Type:</Description>
        <Description className={styles.content}>{description}</Description>
      </div>
      <div className={styles.link}>
        <Description>Specs:</Description>
        <Description className={styles.content}>{link}</Description>
      </div>
    </section>
  );
};

Card.propTypes = {
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

Card.defaultProps = {
  description: "Social and email",
  heading: "Card title",
  icon: "👨‍",
  link: "https://www.notion.so/s0xzwasd/Resume-76a1d193249145c7822ce455942786f7"
};

export default Card;
