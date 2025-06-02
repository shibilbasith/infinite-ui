import Badge from ".";
import Button from "../Button";

export default {
  title: "MyComponents/Badge",
  component: Badge,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Type of the badge",
      control: { type: "select" },
      options: ["number", "dot", "icon"]
    },
    content: {
      description: "Badge content (text, number, or icon)",
      control: { type: "text" }
    },
    position: {
      description: "Badge position relative to the child element",
      control: { type: "select" },
      options: ["top-right", "top-left", "bottom-right", "bottom-left"]
    },
    children: {
      description: "The target element to wrap the badge around",
      control: false
    }
  }
};

export const NumberBadge = {
  args: {
    type: "number",
    content: 5,
    position: "top-right",
    children: <Button>Inbox</Button>
  }
};

export const DotBadge = {
  args: {
    type: "dot",
    position: "top-right",
    children: <Button>Messages</Button>
  }
};

export const IconBadge = {
  args: {
    type: "icon",
    content: <>#</>,
    position: "top-left",
    children: <Button>Notifications</Button>
  }
};
