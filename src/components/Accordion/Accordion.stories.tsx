import InfiniteAccordion from ".";
import { type InfiniteAccordionProps } from "./types";

export default {
  title: "MyComponents/InfiniteAccordion",
  component: InfiniteAccordion,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    allowMultiple: {
      description: "Allows multiple accordion items to be open at the same time",
      control: { type: "boolean" }
    },
    className: {
      description: "Additional class names for the accordion wrapper",
      control: { type: "text" }
    }
  }
};

const sampleItems: InfiniteAccordionProps["items"] = [
  {
    id: "1",
    title: "Accordion Item 1",
    content: "This is the content for item 1."
  },
  {
    id: "2",
    title: "Accordion Item 2",
    content: "This is the content for item 2."
  },
  {
    id: "3",
    title: "Accordion Item 3",
    content: "This is the content for item 3."
  }
];

export const SingleOpen = {
  args: {
    allowMultiple: false,
    items: sampleItems
  }
};

export const MultipleOpen = {
  args: {
    allowMultiple: true,
    items: sampleItems
  }
};
