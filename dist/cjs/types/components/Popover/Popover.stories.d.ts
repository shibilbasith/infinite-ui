declare const _default: {
    title: string;
    component: import("react").FC<import("./types").PopoverProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        children: {
            description: string;
            control: {
                type: string;
            };
        };
        content: {
            description: string;
            control: {
                type: string;
            };
        };
        trigger: {
            description: string;
            control: {
                type: string;
            };
            options: string[];
        };
        placement: {
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
        size: {
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
        showArrow: {
            description: string;
            control: {
                type: string;
            };
        };
        offset: {
            description: string;
            control: {
                type: string;
            };
        };
        closeOnClickOutside: {
            description: string;
            control: {
                type: string;
            };
        };
        closeOnEscape: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const basicPopover: {
    args: {
        content: string;
        children: import("react/jsx-runtime").JSX.Element;
        trigger: string;
        placement: string;
    };
};
export declare const clickPopover: {
    args: {
        content: string;
        children: import("react/jsx-runtime").JSX.Element;
        trigger: string;
        placement: string;
        showArrow: boolean;
    };
};
