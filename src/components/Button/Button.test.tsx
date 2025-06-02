import "@testing-library/jest-dom";
import Button from ".";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button Component", () => {
  // Basic rendering tests
  describe("Rendering", () => {
    it("renders with children text", () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
    });

    it("renders with default props", () => {
      render(<Button>Default Button</Button>);
      const button = screen.getByRole("button");

      expect(button).toHaveClass("infinite-btn", "infinite-btn--primary", "infinite-btn--medium");
      expect(button).toHaveAttribute("type", "button");
      expect(button).not.toBeDisabled();
    });

    it("renders with data-testid", () => {
      render(<Button>Test Button</Button>);
      expect(screen.getByTestId("reusable-button")).toBeInTheDocument();
    });
  });

  // Variant tests
  describe("Variants", () => {
    it("renders primary variant by default", () => {
      render(<Button>Primary</Button>);
      expect(screen.getByRole("button")).toHaveClass("infinite-btn--primary");
    });

    it("renders secondary variant", () => {
      render(<Button variant="secondary">Secondary</Button>);
      expect(screen.getByRole("button")).toHaveClass("infinite-btn--secondary");
    });

    it("renders danger variant", () => {
      render(<Button variant="danger">Danger</Button>);
      expect(screen.getByRole("button")).toHaveClass("infinite-btn--danger");
    });

    it("renders outline variant", () => {
      render(<Button variant="outline">Outline</Button>);
      expect(screen.getByRole("button")).toHaveClass("infinite-btn--outline");
    });
  });

  // Size tests
  describe("Sizes", () => {
    it("renders medium size by default", () => {
      render(<Button>Medium</Button>);
      expect(screen.getByRole("button")).toHaveClass("infinite-btn--medium");
    });

    it("renders small size", () => {
      render(<Button size="small">Small</Button>);
      expect(screen.getByRole("button")).toHaveClass("infinite-btn--small");
    });

    it("renders large size", () => {
      render(<Button size="large">Large</Button>);
      expect(screen.getByRole("button")).toHaveClass("infinite-btn--large");
    });
  });

  // Type tests
  describe("Types", () => {
    it("renders button type by default", () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    });

    it("renders submit type", () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
    });

    it("renders reset type", () => {
      render(<Button type="reset">Reset</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("type", "reset");
    });
  });

  // Disabled state tests
  describe("Disabled State", () => {
    it("renders enabled by default", () => {
      render(<Button>Enabled</Button>);
      expect(screen.getByRole("button")).not.toBeDisabled();
    });

    it("renders disabled when disabled prop is true", () => {
      render(<Button disabled>Disabled</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("does not call onClick when disabled", async () => {
      const handleClick = jest.fn();
      render(
        <Button disabled onClick={handleClick}>
          Disabled Button
        </Button>
      );

      const button = screen.getByRole("button");
      await userEvent.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // Click event tests
  describe("Click Events", () => {
    it("calls onClick handler when clicked", async () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Clickable</Button>);

      const button = screen.getByRole("button");
      await userEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("calls onClick with event object", () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Clickable</Button>);

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledWith(expect.any(Object));
      expect(handleClick.mock.calls[0][0]).toHaveProperty("type", "click");
    });

    it("works without onClick handler", async () => {
      render(<Button>No Handler</Button>);

      const button = screen.getByRole("button");

      // Should not throw error
      expect(async () => {
        await userEvent.click(button);
      }).not.toThrow();
    });
  });

  // Custom className tests
  describe("Custom ClassName", () => {
    it("applies custom className", () => {
      render(<Button className="custom-class">Custom</Button>);
      expect(screen.getByRole("button")).toHaveClass("custom-class");
    });

    it("combines custom className with default classes", () => {
      render(
        <Button className="custom-class" variant="danger" size="large">
          Combined
        </Button>
      );

      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "infinite-btn",
        "infinite-btn--danger",
        "infinite-btn--large",
        "custom-class"
      );
    });
  });

  // Accessibility tests
  describe("Accessibility", () => {
    it("is focusable", () => {
      render(<Button>Focusable</Button>);
      const button = screen.getByRole("button");

      button.focus();
      expect(button).toHaveFocus();
    });

    it("supports keyboard interaction", async () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Keyboard</Button>);

      const button = screen.getByRole("button");
      button.focus();

      await userEvent.keyboard("{Enter}");
      expect(handleClick).toHaveBeenCalledTimes(1);

      await userEvent.keyboard(" ");
      expect(handleClick).toHaveBeenCalledTimes(2);
    });

    it("has proper role", () => {
      render(<Button>Role Test</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  // Complex scenarios
  describe("Complex Scenarios", () => {
    it("renders with all props combined", () => {
      const handleClick = jest.fn();
      render(
        <Button
          variant="secondary"
          size="large"
          type="submit"
          disabled={false}
          className="complex-button"
          onClick={handleClick}
        >
          Complex Button
        </Button>
      );

      const button = screen.getByRole("button");
      expect(button).toHaveClass(
        "infinite-btn",
        "infinite-btn--secondary",
        "infinite-btn--large",
        "complex-button"
      );
      expect(button).toHaveAttribute("type", "submit");
      expect(button).not.toBeDisabled();
      expect(button).toHaveTextContent("Complex Button");
    });

    it("renders with React nodes as children", () => {
      render(
        <Button>
          <span>Icon</span>
          <span>Text</span>
        </Button>
      );

      const button = screen.getByRole("button");
      expect(button).toHaveTextContent("IconText");
      expect(screen.getByText("Icon")).toBeInTheDocument();
      expect(screen.getByText("Text")).toBeInTheDocument();
    });
  });

  // Edge cases
  describe("Edge Cases", () => {
    it("handles empty children", () => {
      render(<Button/>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("handles undefined className", () => {
      render(<Button className={undefined}>Undefined Class</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("infinite-btn", "infinite-btn--primary", "infinite-btn--medium");
    });

    it("handles null onClick", () => {
      render(<Button onClick={null as any}>Null Click</Button>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });
});
