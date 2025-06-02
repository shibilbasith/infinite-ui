import { useState } from "react";
import Modal from ".";
import type { Meta, StoryObj } from "@storybook/react";
import "./Modal.css"; // Optional: for Storybook-only styling

const meta: Meta<typeof Modal> = {
  title: "MyComponents/Modal",
  component: Modal,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: false,
      description: "Controls visibility of the modal (managed internally in example)"
    },
    onClose: {
      description: "Function called when the modal is requested to close",
      action: "closed"
    },
    title: {
      control: { type: "text" },
      description: "Modal title text"
    },
    children: {
      control: { type: "text" },
      description: "Content inside the modal body"
    },
    footer: {
      control: false,
      description: "Custom footer content (JSX)"
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Size of the modal"
    },
    variant: {
      control: { type: "select" },
      options: ["default", "outline", "danger"],
      description: "Visual variant"
    },
    closeOnOverlayClick: {
      control: { type: "boolean" },
      description: "Closes modal on clicking the overlay"
    },
    closeOnEscape: {
      control: { type: "boolean" },
      description: "Closes modal on pressing Escape key"
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Whether to show close (×) button"
    },
    centered: {
      control: { type: "boolean" },
      description: "Vertically center the modal"
    },
    fullScreen: {
      control: { type: "boolean" },
      description: "Display modal in full screen mode"
    },
    className: { control: false },
    overlayClassName: { control: false },
    contentClassName: { control: false },
    headerClassName: { control: false },
    bodyClassName: { control: false },
    footerClassName: { control: false }
  }
};

export default meta;

const Template = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => { setIsOpen(true); }} style={{ padding: "10px 16px", marginBottom: "1rem" }}>
        Open Modal
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          args.onClose?.();
        }}
      />
    </>
  );
};

// Stories
export const Default: StoryObj = {
  render: (args) => (
    <Template
      {...args}
      title="Default Modal"
      children="This is the body of the modal."
    />
  )
};

// export const WithFooter: StoryObj = {
//   render: (args) => (
//     <Template
//       {...args}
//       title="Modal with Footer"
//       footer={
//         <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
//           <button onClick={args.onClose}>Cancel</button>
//           <button onClick={() => alert("Confirmed!")}>Confirm</button>
//         </div>
//       }
//       children="Modal with custom footer content."
//     />
//   )
// };

export const FullScreen: StoryObj = {
  render: (args) => (
    <Template
      {...args}
      title="Full Screen Modal"
      fullScreen
      children="This modal takes up the full screen."
    />
  )
};

export const WithoutCloseButton: StoryObj = {
  render: (args) => (
    <Template
      {...args}
      title="No Close Button"
      showCloseButton={false}
      children="You can only close this modal by clicking the overlay or Escape key."
    />
  )
};
