export interface ButtonProps {
    children?: React.ReactNode;
    variant?: "primary" | "secondary" | "danger" | "outline";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}
