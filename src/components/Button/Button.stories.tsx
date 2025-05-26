import Button from ".";

export default {
  title: "MyComponents/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "The title of the Button",
      control: {
        type: "text"
      }
    },
    children: {
      description: "The children of the Button",
      control: {
        type: "text"
      }
    }
  }
};

export const primaryButton = {
  args: {
    variant: "primary",
    children: "primary Button"
  }
};

export const secondaryButton = {
  args: {
    variant: "secondary",
    children: "secondary Button"
  }
};
