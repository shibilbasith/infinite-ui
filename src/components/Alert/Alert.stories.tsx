import Alert from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Alert> = {
  title: "MyComponents/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    message: {
      description: "The alert message to be displayed",
      control: { type: "text" },
      defaultValue: "This is an alert message"
    },
    type: {
      description: "The style of the alert based on its type",
      control: {
        type: "select"
      },
      options: ["success", "error", "warning", "info"],
      defaultValue: "info"
    },
    className: {
      description: "Additional custom class names (optional)",
      control: { type: "text" }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const SuccessAlert: Story = {
  args: {
    message: "Operation successful!",
    type: "success"
  }
};

export const ErrorAlert: Story = {
  args: {
    message: "Something went wrong.",
    type: "error"
  }
};

export const WarningAlert: Story = {
  args: {
    message: "Please check your input.",
    type: "warning"
  }
};

export const InfoAlert: Story = {
  args: {
    message: "This is an informational alert.",
    type: "info"
  }
};
