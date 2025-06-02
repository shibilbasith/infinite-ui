type BadgeType = "number" | "dot" | "icon";
export interface BadgeProps {
    type?: BadgeType;
    content?: string | number | React.ReactNode;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    className?: string;
    children?: React.ReactNode;
}
export {};
