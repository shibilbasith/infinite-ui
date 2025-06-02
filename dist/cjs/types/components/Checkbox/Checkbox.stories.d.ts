declare const _default: {
    title: string;
    component: import("react").FC<import("./types").CheckboxProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        label: {
            description: string;
            control: {
                type: string;
            };
        };
        checked: {
            description: string;
            control: {
                type: string;
            };
        };
        indeterminate: {
            description: string;
            control: {
                type: string;
            };
        };
        disabled: {
            description: string;
            control: {
                type: string;
            };
        };
        required: {
            description: string;
            control: {
                type: string;
            };
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
    };
};
export default _default;
export declare const Default: {
    args: {
        label: string;
    };
};
export declare const Checked: {
    args: {
        label: string;
        checked: boolean;
    };
};
export declare const Indeterminate: {
    args: {
        label: string;
        indeterminate: boolean;
    };
};
export declare const Disabled: {
    args: {
        label: string;
        disabled: boolean;
    };
};
export declare const Required: {
    args: {
        label: string;
        required: boolean;
    };
};
export declare const Small: {
    args: {
        label: string;
        size: string;
    };
};
export declare const Large: {
    args: {
        label: string;
        size: string;
    };
};
export declare const DangerVariant: {
    args: {
        label: string;
        variant: string;
    };
};
