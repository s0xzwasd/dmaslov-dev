import React from "react";
import ReactDOM from "react-dom";
import Description from "./Description";

it("renders string without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Description>Description will be here</Description>, div);
});

it("renders object without crashing", () => {
  const div = document.createElement("div");
  const data = [
    {
      description: "Description will be here"
    }
  ];
  ReactDOM.render(<Description size='large'>{data[0].description}</Description>, div);
});
