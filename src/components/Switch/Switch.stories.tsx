import { useState } from "react";
import Switch from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Switch> = {
  title: "MyComponents/Switch",
  component: Switch,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      description: "Whether the switch is on (`true`) or off (`false`). If undefined, the switch is uncontrolled.",
      control: { type: "boolean" }
    },
    onChange: {
      description: "Callback fired when the switch value changes. Receives `(checked, event)`.",
      action: "changed"
    },
    disabled: {
      description: "Disables the switch when true.",
      control: { type: "boolean" }
    },
    label: {
      description: "Optional label displayed next to the switch.",
      control: { type: "text" }
    },
    className: {
      description: "Custom class name for styling the switch.",
      control: { type: "text" }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Switch>;

// ✅ Basic usage (uncontrolled)
export const Default: Story = {
  args: {
    label: "Enable notifications"
  }
};

// ✅ Controlled usage with dynamic label
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(true);
    return (
      <Switch
        checked={value}
        onChange={(checked) => { setValue(checked); }}
        label={`Switch is ${value ? "On" : "Off"}`}
      />
    );
  }
};

// ✅ Disabled switch
export const Disabled: Story = {
  args: {
    label: "Disabled switch",
    disabled: true
  }
};

// ✅ Custom class usage
export const CustomClass: Story = {
  args: {
    label: "Custom styled switch",
    className: "my-custom-switch"
  }
};
