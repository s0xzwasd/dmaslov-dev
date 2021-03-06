import React, { PureComponent } from "react";
import { v4 as uuidv4 } from "uuid";

import Heading from "../components/Heading";
import Card from "../components/Card";

import aboutData from "../data/about";
import projectsData from "../data/projects";
import otherData from "../data/other";

import styles from "./Main.module.scss";

class Main extends PureComponent {
  renderCards = data => {
    return data.map(({ color, colorOnDark, description, heading, subheading, icon, link }) => (
      <Card
        key={uuidv4()}
        color={color}
        colorOnDark={colorOnDark}
        description={description}
        heading={heading}
        subheading={subheading}
        icon={icon}
        link={link}
      />
    ));
  };

  render() {
    return (
      <main className={styles.container}>
        <section className={styles.header}>
          <Heading className={styles.heading} size='medium'>
            About me
          </Heading>
          <div className={styles.cards}>{this.renderCards(aboutData)}</div>
        </section>
        <section className={styles.section}>
          <Heading className={styles.heading} size='medium'>
            Projects
          </Heading>
          <div className={styles.cards}>{this.renderCards(projectsData)}</div>
        </section>
        <section className={styles.section}>
          <Heading className={styles.heading} size='medium'>
            Other
          </Heading>
          <div className={styles.cards}>{this.renderCards(otherData)}</div>
        </section>
      </main>
    );
  }
}

export default Main;
