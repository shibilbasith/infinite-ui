import Popover from ".";

export default {
  title: "MyComponents/Popover",
  component: Popover,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The element that triggers the popover",
      control: { type: "text" }
    },
    content: {
      description: "The content displayed in the popover",
      control: { type: "text" }
    },
    trigger: {
      description: "The event that triggers the popover",
      control: { type: "select" },
      options: ["click", "hover", "focus", "manual"]
    },
    placement: {
      description: "Popover position relative to the trigger",
      control: { type: "select" },
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end"
      ]
    },
    variant: {
      description: "Visual style of the popover",
      control: { type: "select" },
      options: ["default", "success", "warning", "error", "info"]
    },
    size: {
      description: "Size of the popover",
      control: { type: "select" },
      options: ["small", "medium", "large"]
    },
    disabled: {
      description: "Disable the popover trigger",
      control: { type: "boolean" }
    },
    showArrow: {
      description: "Display an arrow pointing to the trigger",
      control: { type: "boolean" }
    },
    offset: {
      description: "Offset distance from the trigger",
      control: { type: "number" }
    },
    closeOnClickOutside: {
      description: "Close popover when clicking outside",
      control: { type: "boolean" }
    },
    closeOnEscape: {
      description: "Close popover when pressing escape",
      control: { type: "boolean" }
    }
  }
};

export const basicPopover = {
  args: {
    content: "Popover content",
    children: <button>Click me</button>,
    trigger: "hover",
    placement: "top"
  }
};

export const clickPopover = {
  args: {
    content: "Clicked popover",
    children: <button>Click to open</button>,
    trigger: "click",
    placement: "bottom",
    showArrow: true
  }
};
