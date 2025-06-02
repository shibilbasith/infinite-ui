import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from ".";

describe("Checkbox component", () => {
  it("renders without label", () => {
    render(<Checkbox id="test-checkbox" />);
    const checkbox = screen.getByTestId("checkbox-input");
    expect(checkbox).toBeInTheDocument();
    expect(screen.queryByLabelText(/.+/)).not.toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Checkbox id="labeled" label="Accept terms" />);
    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
  });

  it("applies checked prop correctly", () => {
    render(<Checkbox id="checked" label="Checked" checked={true} onChange={() => {}} />);
    expect(screen.getByLabelText("Checked")).toBeChecked();
  });

  it("supports defaultChecked", () => {
    render(<Checkbox id="default" label="Default Checked" defaultChecked={true} />);
    expect(screen.getByLabelText("Default Checked")).toBeChecked();
  });

  it("handles indeterminate state", () => {
    render(<Checkbox id="indeterminate" indeterminate={true} label="Indeterminate" />);
    const checkbox = screen.getByLabelText("Indeterminate");
    expect(checkbox.indeterminate).toBe(true);
  });

  it("calls onChange when clicked", async () => {
    const handleChange = jest.fn();
    render(<Checkbox id="change" label="Change Me" onChange={handleChange} />);
    const checkbox = screen.getByLabelText("Change Me");
    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("does not trigger onChange when disabled", async () => {
    const handleChange = jest.fn();
    render(<Checkbox id="disabled" label="Disabled" disabled={true} onChange={handleChange} />);
    const checkbox = screen.getByLabelText("Disabled");
    expect(checkbox).toBeDisabled();
    await userEvent.click(checkbox);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("displays required asterisk when required", () => {
    render(<Checkbox id="required" label="I agree" required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });
});
