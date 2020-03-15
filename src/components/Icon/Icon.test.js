import React from "react";
import ReactDOM from "react-dom";

import Icon from "./Icon";

it("renders without crashing", () => {
  const div = document.createElement("div");
  // eslint-disable-next-line jsx-a11y/accessible-emoji
  ReactDOM.render(<Icon label='Rocket'>🚀</Icon>, div);
});
