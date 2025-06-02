// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import RadioGroup from ".";

// const options = [
//   { label: "Option A", value: "a" },
//   { label: "Option B", value: "b" },
//   { label: "Option C", value: "c" }
// ];

// describe("RadioGroup component", () => {
//   it("renders all radio options", () => {
//     render(<RadioGroup name="test-group" options={options} />);
//     options.forEach(option => {
//       expect(screen.getByLabelText(option.label)).toBeInTheDocument();
//     });
//   });

//   it("renders group label with required asterisk", () => {
//     render(
//       <RadioGroup
//         name="group"
//         options={options}
//         groupLabel="Choose one"
//         required
//       />
//     );
//     expect(screen.getByText("Choose one")).toBeInTheDocument();
//     expect(screen.getByText("*")).toBeInTheDocument();
//   });

//   it("sets the checked radio based on `value` prop", () => {
//     render(<RadioGroup name="test" options={options} value="b" />);
//     const radio = screen.getByLabelText("Option B");
//     expect(radio.checked).toBe(true);
//   });

//   it("sets the default checked radio based on `defaultValue` prop", () => {
//     render(<RadioGroup name="test" options={options} defaultValue="a" />);
//     const radio = screen.getByLabelText("Option A");
//     expect(radio.defaultChecked).toBe(true);
//   });

//   it("calls onChange when a radio is clicked", async () => {
//     const handleChange = jest.fn();
//     render(
//       <RadioGroup name="test" options={options} onChange={handleChange} />
//     );
//     const radio = screen.getByLabelText("Option C");
//     await userEvent.click(radio);
//     expect(handleChange).toHaveBeenCalledTimes(1);
//     expect(handleChange).toHaveBeenCalledWith("c", expect.any(Object));
//   });

//   it("disables all options when `disabled` is true", () => {
//     render(<RadioGroup name="test" options={options} disabled />);
//     options.forEach(option => {
//       expect(screen.getByLabelText(option.label)).toBeDisabled();
//     });
//   });

//   it("disables individual options based on `option.disabled`", () => {
//     const opts = [
//       { label: "A", value: "a" },
//       { label: "B", value: "b", disabled: true }
//     ];
//     render(<RadioGroup name="test" options={opts} />);
//     expect(screen.getByLabelText("A")).not.toBeDisabled();
//     expect(screen.getByLabelText("B")).toBeDisabled();
//   });

//   it("applies custom class names", () => {
//     render(
//       <RadioGroup
//         name="custom"
//         options={options}
//         className="custom-group"
//         labelClassName="custom-label"
//       />
//     );
//     const group = screen.getByRole("radiogroup");
//     expect(group).toHaveClass("custom-group");
//     const label = screen.getByLabelText("Option A");
//     expect(label.nextSibling).toHaveClass("custom-label");
//   });
// });
