import React from "react";
import Dropdown from "../components/Field/Dropdown";

export default {
  title: "Components/Fields/Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
};
