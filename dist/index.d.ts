import React$1, { ReactNode } from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "danger" | "outline";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}

declare const Button: React$1.FC<ButtonProps>;

interface CheckboxProps {
    id?: string;
    name?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    label?: string;
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "success" | "danger";
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    className?: string;
    labelClassName?: string;
    "aria-label"?: string;
    "aria-describedby"?: string;
    required?: boolean;
}

declare const Checkbox: React$1.FC<CheckboxProps>;

interface InputProps {
    value?: string;
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    size?: "small" | "medium" | "large";
    variant?: "default" | "success" | "warning" | "error";
    label?: string;
    helperText?: string;
    errorText?: string;
    name?: string;
    id?: string;
    className?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    min?: string | number;
    max?: string | number;
    step?: string | number;
    "aria-label"?: string;
    "aria-describedby"?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    prefix?: string;
    suffix?: string;
}

declare const Input: React$1.FC<InputProps>;

interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean, event: React$1.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    label?: string;
    className?: string;
}
declare const Switch: React$1.FC<SwitchProps>;

interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
    group?: string;
}
interface SelectProps {
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

declare const Select: React$1.FC<SelectProps>;

interface RadioOption {
    label: string;
    value: string;
    disabled?: boolean;
}
interface RadioGroupProps {
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

declare const RadioGroup: React$1.FC<RadioGroupProps>;

interface TabItem {
    key: string;
    label: string;
    content: ReactNode;
    icon?: ReactNode;
    badge?: ReactNode;
    disabled?: boolean;
}
interface TabProps {
    tabs: TabItem[];
    defaultActiveTab?: string;
    onChange?: (tabKey: string) => void;
    variant?: "default" | "pills" | "underline" | "bordered" | "cards";
    size?: "small" | "medium" | "large";
    position?: "horizontal" | "vertical";
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
    tabsClassName?: string;
    contentClassName?: string;
}

declare const Tab: React$1.FC<TabProps>;

interface TooltipProps {
    children: ReactNode;
    text: string;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
}
declare const Tooltip: React$1.FC<TooltipProps>;

interface SegmentedOption {
    value: string;
    label: string;
    icon?: ReactNode;
    disabled?: boolean;
}
interface SegmentedControlProps {
    options: SegmentedOption[];
    defaultValue?: string;
    onChange?: (value: string) => void;
    size?: "small" | "medium" | "large";
    variant?: "default" | "outlined" | "filled";
    disabled?: boolean;
    className?: string;
    fullWidth?: boolean;
}

declare const Segmented: React$1.FC<SegmentedControlProps>;

interface AlertProps {
    message: string;
    type?: "success" | "error" | "warning" | "info";
    className?: string;
}

declare const Alert: React$1.FC<AlertProps>;

interface InfiniteAccordionItem {
    id: string;
    title: string;
    content: string | React.ReactNode;
}
interface InfiniteAccordionProps {
    items: InfiniteAccordionItem[];
    allowMultiple?: boolean;
    className?: string;
}

declare const InfiniteAccordion: React$1.FC<InfiniteAccordionProps>;

type BadgeType = "number" | "dot" | "icon";
interface BadgeProps {
    type?: BadgeType;
    content?: string | number | React.ReactNode;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    className?: string;
    children?: React.ReactNode;
}

declare const Badge: React$1.FC<BadgeProps>;

interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
    label?: string;
    className?: string;
    onChange?: (value: number) => void;
}

declare const Slider: React$1.FC<SliderProps>;

interface PopoverProps {
    children: React.ReactNode;
    content: React.ReactNode;
    trigger?: "click" | "hover" | "focus" | "manual";
    placement?: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end";
    variant?: "default" | "success" | "warning" | "error" | "info";
    size?: "small" | "medium" | "large";
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    offset?: number;
    showArrow?: boolean;
    closeOnClickOutside?: boolean;
    closeOnEscape?: boolean;
    className?: string;
    contentClassName?: string;
    delay?: number;
    hideDelay?: number;
    id?: string;
}

declare const Popover: React$1.FC<PopoverProps>;

interface ModalProps {
    isOpen: boolean;
    onClose?: () => void;
    title?: string;
    children: ReactNode;
    footer?: ReactNode;
    size?: "small" | "medium" | "large" | "extra-large";
    variant?: "default" | "centered" | "drawer" | "fullscreen";
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    showCloseButton?: boolean;
    centered?: boolean;
    fullScreen?: boolean;
    className?: string;
    overlayClassName?: string;
    contentClassName?: string;
    headerClassName?: string;
    bodyClassName?: string;
    footerClassName?: string;
}

declare const Modal: React$1.FC<ModalProps>;

export { InfiniteAccordion as Accordion, Alert, Badge, Button, Checkbox, Input, Modal, Popover, RadioGroup, Segmented, Select, Slider, Switch, Tab, Tooltip };
