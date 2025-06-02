import React from "react";
import "./Switch.css";
interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    label?: string;
    className?: string;
}
declare const Switch: React.FC<SwitchProps>;
export default Switch;
