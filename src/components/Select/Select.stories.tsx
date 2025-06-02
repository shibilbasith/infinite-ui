import Select from ".";

export default {
  title: "MyComponents/Select",
  component: Select,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "Label for the Select dropdown",
      control: {
        type: "text"
      }
    },
    options: {
      description: "Array of options to display",
      control: {
        type: "object"
      }
    },
    onChange: {
      description: "Callback when selection changes",
      action: "changed"
    }
  }
};

export const basicSelect = {
  args: {
    label: "Choose an option",
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" }
    ]
  }
};

export const withPreselectedOption = {
  args: {
    label: "Select a number",
    options: [
      { label: "One", value: "1" },
      { label: "Two", value: "2" },
      { label: "Three", value: "3" }
    ],
    value: "2"
  }
};
