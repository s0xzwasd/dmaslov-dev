import React from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card
};

const styles = {
  padding: "30px"
};

export const BasicCard = () => (
  <div style={styles}>
    <Card />
  </div>
);

export const CardWithProps = () => (
  <div style={styles}>
    <Card description='Some description' heading='About project' icon='😉' link='https://www.google.ru/' />
  </div>
);

export const CardWithCustomColor = () => (
  <div style={styles}>
    <Card
      color='important'
      description='Some description again and again'
      heading='Component!'
      icon='😉'
      link='https://www.google.ru/'
    />
  </div>
);

export const CardWithSubheading = () => (
  <div style={styles}>
    <Card
      color='important'
      description='Some description again and again'
      heading='Component!'
      subheading='Subheading'
      icon='😉'
      link='https://www.google.ru/'
    />
  </div>
);
