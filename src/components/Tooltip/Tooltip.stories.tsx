import Tooltip from ".";
import Button from "../Button"; // Adjust path if necessary

export default {
  title: "MyComponents/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "The text shown inside the tooltip",
      control: { type: "text" }
    },
    position: {
      description: "Position of the tooltip relative to the children",
      control: {
        type: "select"
      },
      options: ["top", "bottom", "left", "right"]
    },
    children: {
      description: "The target element that will trigger the tooltip",
      control: { type: "text" }
    }
  }
};

export const topTooltip = {
  args: {
    text: "Tooltip on top",
    position: "top",
    children: <Button>Hover me</Button>
  }
};

export const bottomTooltip = {
  args: {
    text: "Tooltip on bottom",
    position: "bottom",
    children: <Button>Hover me</Button>
  }
};

export const leftTooltip = {
  args: {
    text: "Tooltip on left",
    position: "left",
    children: <Button>Hover me</Button>
  }
};

export const rightTooltip = {
  args: {
    text: "Tooltip on right",
    position: "right",
    children: <Button>Hover me</Button>
  }
};
