// types.ts
export interface CheckboxProps {
  id?: string
  name?: string
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  label?: string
  size?: "small" | "medium" | "large"
  variant?: "primary" | "secondary" | "success" | "danger"
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  className?: string
  labelClassName?: string
  "aria-label"?: string
  "aria-describedby"?: string
  required?: boolean
}
