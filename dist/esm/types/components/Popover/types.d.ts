export interface PopoverProps {
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
