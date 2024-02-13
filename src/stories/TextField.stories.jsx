import React from "react";
import TextField from "../components/Field/TextField.jsx";

export default {
  title: "Components/Fields",
  component: TextField,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
};

const Template = (args) => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Label",
  value: "",
  onChange: () => {},
};
