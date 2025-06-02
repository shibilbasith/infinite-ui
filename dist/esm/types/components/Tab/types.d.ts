import { type ReactNode } from "react";
export interface TabItem {
    key: string;
    label: string;
    content: ReactNode;
    icon?: ReactNode;
    badge?: ReactNode;
    disabled?: boolean;
}
export interface TabProps {
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
