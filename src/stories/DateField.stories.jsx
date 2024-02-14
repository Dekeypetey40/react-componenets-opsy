import React from "react";
import { action } from "@storybook/addon-actions";
import DateField from "../components/Field/DateField";

export default {
  title: "Components/Fields",
  component: DateField,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
};

export const Date = () => (
  <DateField label="Date" value="" onChange={action("changed")} />
);
