import React from "react";

import Icon from "./Icon";

export default {
  title: "Icon",
  component: Icon
};

// eslint-disable-next-line jsx-a11y/accessible-emoji
export const IconCustom = () => <Icon label='Rocket'>‍🚀</Icon>;

export const IconDefault = () => <Icon />;
