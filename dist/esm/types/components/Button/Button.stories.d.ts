declare const _default: {
    title: string;
    component: import("react").FC<import("./types").ButtonProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        title: {
            description: string;
            control: {
                type: string;
            };
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
export declare const primaryButton: {
    args: {
        variant: string;
        children: string;
    };
};
export declare const secondaryButton: {
    args: {
        variant: string;
        children: string;
    };
};
