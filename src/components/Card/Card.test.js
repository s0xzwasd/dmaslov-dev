import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Card
      color='important'
      description='Some description again and again'
      heading='Component!'
      subheading='Subheading'
      icon='😉'
      link='https://www.google.ru/'
    />,
    div
  );
});
