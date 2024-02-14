import React, { useState } from "react";
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

export const Date = () => {
  const [dates, setDates] = useState(["", ""]); // Initialize state with two empty dates

  const handleDateChange = (index) => (event) => {
    const newDates = [...dates];
    newDates[index] = event.target.value;
    setDates(newDates);
    action("changed")(event);
  };

  return dates.map((date, index) => (
    <DateField
      key={index}
      label={`Date ${index + 1}`}
      value={date}
      onChange={handleDateChange(index)}
    />
  ));
};
