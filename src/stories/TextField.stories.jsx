import React from "react";
import TextField from "../components/TextField/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  value: "",
  onChange: () => {},
};
