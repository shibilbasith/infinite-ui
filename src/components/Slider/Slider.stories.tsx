import Slider from "."; // Update this path if your Slider is in a different directory

export default {
  title: "MyComponents/Slider",
  component: Slider,
  parameters: {
    layout: "centered" // Optional: centers the component in the preview
  },
  tags: ["autodocs"] // Optional: enables auto-generated docs if supported
};

// Default story
export const Basic = () => <Slider label="Example Slider" />;
