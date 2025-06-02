import React, { useState } from "react";
import RadioGroup from ".";

export default {
  title: "MyComponents/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "The name of the radio group",
      control: "text"
    },
    groupLabel: {
      description: "Label for the radio group",
      control: "text"
    },
    orientation: {
      description: "Layout direction",
      control: { type: "radio" },
      options: ["vertical", "horizontal"]
    },
    size: {
      description: "Size of the radio buttons",
      control: { type: "radio" },
      options: ["small", "medium", "large"]
    },
    variant: {
      description: "Color variant of the radio buttons",
      control: { type: "radio" },
      options: ["primary", "secondary", "success", "danger"]
    },
    disabled: {
      description: "Disable all radio buttons",
      control: "boolean"
    },
    required: {
      description: "Mark group as required",
      control: "boolean"
    },
    value: {
      control: false,
      table: {
        disable: true
      }
    },
    onChange: {
      action: "changed",
      table: {
        category: "Events"
      }
    },
    onFocus: {
      action: "focused",
      table: {
        category: "Events"
      }
    },
    onBlur: {
      action: "blurred",
      table: {
        category: "Events"
      }
    }
  }
};

const defaultOptions = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c" }
];

export const Basic: React.FC = () => (
  <RadioGroup
    name="basic"
    groupLabel="Basic Group"
    options={defaultOptions}
  />
);

export const Controlled: React.FC = () => {
  const [selected, setSelected] = useState("b");

  return (
    <RadioGroup
      name="controlled"
      groupLabel="Controlled Group"
      value={selected}
      onChange={(val) => { setSelected(val); }}
      options={defaultOptions}
    />
  );
};

export const Horizontal = {
  args: {
    name: "horizontal",
    groupLabel: "Horizontal Layout",
    orientation: "horizontal",
    options: defaultOptions
  }
};

export const LargeDanger = {
  args: {
    name: "priority",
    groupLabel: "Priority",
    variant: "danger",
    size: "large",
    options: [
      { label: "Low", value: "low" },
      { label: "Medium", value: "medium" },
      { label: "High", value: "high" }
    ]
  }
};

export const WithDisabledOption = {
  args: {
    name: "plans",
    groupLabel: "Subscription Plans",
    options: [
      { label: "Free", value: "free" },
      { label: "Pro", value: "pro" },
      { label: "Enterprise", value: "enterprise", disabled: true }
    ]
  }
};

export const RequiredField = {
  args: {
    name: "terms",
    groupLabel: "Terms and Conditions",
    required: true,
    options: [
      { label: "I Agree", value: "agree" },
      { label: "I Disagree", value: "disagree" }
    ]
  }
};
