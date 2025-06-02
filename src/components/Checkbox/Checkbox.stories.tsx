import Checkbox from ".";

export default {
  title: "MyComponents/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "The label text for the checkbox",
      control: {
        type: "text"
      }
    },
    checked: {
      description: "Checkbox checked state (controlled)",
      control: {
        type: "boolean"
      }
    },
    indeterminate: {
      description: "Checkbox is partially checked",
      control: {
        type: "boolean"
      }
    },
    disabled: {
      description: "Disables the checkbox",
      control: {
        type: "boolean"
      }
    },
    required: {
      description: "Marks the checkbox as required",
      control: {
        type: "boolean"
      }
    },
    size: {
      description: "Size of the checkbox",
      control: {
        type: "select"
      },
      options: ["small", "medium", "large"]
    },
    variant: {
      description: "Variant style of the checkbox",
      control: {
        type: "select"
      },
      options: ["primary", "secondary", "success", "danger"]
    }
  }
};

export const Default = {
  args: {
    label: "Default Checkbox"
  }
};

export const Checked = {
  args: {
    label: "Checked Checkbox",
    checked: true
  }
};

export const Indeterminate = {
  args: {
    label: "Indeterminate Checkbox",
    indeterminate: true
  }
};

export const Disabled = {
  args: {
    label: "Disabled Checkbox",
    disabled: true
  }
};

export const Required = {
  args: {
    label: "Required Checkbox",
    required: true
  }
};

export const Small = {
  args: {
    label: "Small Checkbox",
    size: "small"
  }
};

export const Large = {
  args: {
    label: "Large Checkbox",
    size: "large"
  }
};

export const DangerVariant = {
  args: {
    label: "Danger Checkbox",
    variant: "danger"
  }
};
