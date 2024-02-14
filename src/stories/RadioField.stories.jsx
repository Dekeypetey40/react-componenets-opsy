import React from "react";
import { action } from "@storybook/addon-actions";
import RadioField from "../components/Field/RadioField";

export default {
  title: "Components/Fields",
  component: RadioField,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
  argTypes: {
    onChange: { action: "changed" },
    control: {
      type: "radio",
      options: "object",
    },
  },
};

const Template = (args) => <RadioField {...args} />;

export const Radio = Template.bind({});
Radio.args = {
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ],
  name: "options",
  value: "1",
  onChange: (event) => {
    Radio.args.value = event.target.value;
    action("changed")(event);
  },
};
