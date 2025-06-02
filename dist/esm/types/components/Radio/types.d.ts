export interface RadioOption {
    label: string;
    value: string;
    disabled?: boolean;
}
export interface RadioGroupProps {
    name: string;
    options: RadioOption[];
    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "success" | "danger";
    orientation?: "horizontal" | "vertical";
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    className?: string;
    labelClassName?: string;
    groupLabel?: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
    required?: boolean;
}
