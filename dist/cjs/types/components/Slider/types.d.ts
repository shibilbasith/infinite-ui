export interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
    label?: string;
    className?: string;
    onChange?: (value: number) => void;
}
