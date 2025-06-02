declare const _default: {
    title: string;
    component: import("react").FC<import("./type").BadgeProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        type: {
            description: string;
            control: {
                type: string;
            };
            options: string[];
        };
        content: {
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
            control: boolean;
        };
    };
};
export default _default;
export declare const NumberBadge: {
    args: {
        type: string;
        content: number;
        position: string;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const DotBadge: {
    args: {
        type: string;
        position: string;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
export declare const IconBadge: {
    args: {
        type: string;
        content: import("react/jsx-runtime").JSX.Element;
        position: string;
        children: import("react/jsx-runtime").JSX.Element;
    };
};
