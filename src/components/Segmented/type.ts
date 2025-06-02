// type.ts
import { type ReactNode } from "react";

export interface SegmentedOption {
  value: string
  label: string
  icon?: ReactNode
  disabled?: boolean
}

export interface SegmentedControlProps {
  options: SegmentedOption[]
  defaultValue?: string
  onChange?: (value: string) => void
  size?: "small" | "medium" | "large"
  variant?: "default" | "outlined" | "filled"
  disabled?: boolean
  className?: string
  fullWidth?: boolean
}
