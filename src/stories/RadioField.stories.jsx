import React from "react";
import { action } from "@storybook/addon-actions";
import RadioField from "../components/Field/RadioField";

export default {
  title: "Components/Fields",
  component: RadioField,
};

const Template = (args) => <RadioField {...args} />;

export const Radio = Template.bind({});
Radio.args = {
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ],
  name: "options",
  value: "1",
  onChange: action("changed"),
};
