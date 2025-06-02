import Segmented from ".";

export default {
  title: "MyComponents/Segmented",
  component: Segmented,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "Array of selectable options with value, label, and optional icon or disabled",
      control: false
    },
    defaultValue: {
      description: "Initial selected value",
      control: { type: "text" }
    },
    onChange: {
      description: "Callback when selected value changes",
      action: "value changed"
    },
    size: {
      description: "Size of the segmented control",
      control: { type: "select" },
      options: ["small", "medium", "large"]
    },
    variant: {
      description: "Visual style variant",
      control: { type: "select" },
      options: ["default", "outline", "ghost"]
    },
    disabled: {
      description: "Disable the entire segmented control",
      control: { type: "boolean" }
    },
    fullWidth: {
      description: "Make the control span 100% width",
      control: { type: "boolean" }
    },
    className: {
      description: "Custom class for the root element",
      control: { type: "text" }
    }
  }
};

const options = [
  { label: "Light", value: "light", icon: <>@</> },
  { label: "Dark", value: "dark", icon: <>#</> },
  { label: "System", value: "system" }
];

export const Default = {
  args: {
    options,
    defaultValue: "light",
    size: "medium",
    variant: "default",
    fullWidth: false,
    disabled: false
  }
};

export const WithIcons = {
  args: {
    options,
    defaultValue: "system",
    size: "large",
    variant: "outline"
  }
};

export const Disabled = {
  args: {
    options,
    defaultValue: "light",
    disabled: true
  }
};

export const FullWidth = {
  args: {
    options,
    defaultValue: "dark",
    fullWidth: true
  }
};
