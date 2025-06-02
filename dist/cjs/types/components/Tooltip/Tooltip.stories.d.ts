declare const _default: {
    title: string;
    component: import("react").FC<import(".").TooltipProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        text: {
            description: string;
            control: {
                type: string;
            };
        };
        position: {
            description: string;
            control: {
                type: string;
            };
            options: string[];
        };
        children: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const topTooltip: {
    args: {
        text: string;
        position: string;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const bottomTooltip: {
    args: {
        text: string;
        position: string;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const leftTooltip: {
    args: {
        text: string;
        position: string;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const rightTooltip: {
    args: {
        text: string;
        position: string;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
