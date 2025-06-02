export interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
    group?: string;
}
export interface SelectProps {
    id?: string;
    name?: string;
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    multiple?: boolean;
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "success" | "danger";
    label?: string;
    helperText?: string;
    errorText?: string;
    searchable?: boolean;
    clearable?: boolean;
    loading?: boolean;
    onChange?: (value: string | string[], event?: React.ChangeEvent<HTMLSelectElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLDivElement>) => void;
    onSearch?: (searchTerm: string) => void;
    className?: string;
    labelClassName?: string;
    "aria-label"?: string;
    "aria-describedby"?: string;
}
