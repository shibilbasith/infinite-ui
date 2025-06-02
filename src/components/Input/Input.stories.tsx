import Input from ".";

export default {
  title: "MyComponents/Input",
  component: Input,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "The title of the Input",
      control: {
        type: "text"
      }
    },
    children: {
      description: "The children of the Input",
      control: {
        type: "text"
      }
    }
  }
};

export const primaryInput = {
  args: {
    variant: "primary"
  }
};
