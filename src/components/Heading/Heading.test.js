import React from "react";
import ReactDOM from "react-dom";

import Heading from "./Heading";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Heading>Header test string</Heading>, div);
});

it("renders large heading", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Heading size='large'>Large header</Heading>, div);
});

it("renders medium heading", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Heading size='medium'>Medium header</Heading>, div);
});
