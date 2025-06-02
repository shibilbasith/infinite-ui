declare const _default: {
    title: string;
    component: import("react").FC<import("./type").SegmentedControlProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        options: {
            description: string;
            control: boolean;
        };
        defaultValue: {
            description: string;
            control: {
                type: string;
            };
        };
        onChange: {
            description: string;
            action: string;
        };
        size: {
            description: string;
            control: {
                type: string;
            };
            options: string[];
        };
        variant: {
            description: string;
            control: {
                type: string;
            };
            options: string[];
        };
        disabled: {
            description: string;
            control: {
                type: string;
            };
        };
        fullWidth: {
            description: string;
            control: {
                type: string;
            };
        };
        className: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Default: {
    args: {
        options: ({
            label: string;
            value: string;
            icon: import("react/jsx-runtime").JSX.Element;
        } | {
            label: string;
            value: string;
            icon?: undefined;
        })[];
        defaultValue: string;
        size: string;
        variant: string;
        fullWidth: boolean;
        disabled: boolean;
    };
};
export declare const WithIcons: {
    args: {
        options: ({
            label: string;
            value: string;
            icon: import("react/jsx-runtime").JSX.Element;
        } | {
            label: string;
            value: string;
            icon?: undefined;
        })[];
        defaultValue: string;
        size: string;
        variant: string;
    };
};
export declare const Disabled: {
    args: {
        options: ({
            label: string;
            value: string;
            icon: import("react/jsx-runtime").JSX.Element;
        } | {
            label: string;
            value: string;
            icon?: undefined;
        })[];
        defaultValue: string;
        disabled: boolean;
    };
};
export declare const FullWidth: {
    args: {
        options: ({
            label: string;
            value: string;
            icon: import("react/jsx-runtime").JSX.Element;
        } | {
            label: string;
            value: string;
            icon?: undefined;
        })[];
        defaultValue: string;
        fullWidth: boolean;
    };
};
