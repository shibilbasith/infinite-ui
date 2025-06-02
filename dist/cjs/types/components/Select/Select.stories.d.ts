declare const _default: {
    title: string;
    component: import("react").FC<import("./types").SelectProps>;
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
        options: {
            description: string;
            control: {
                type: string;
            };
        };
        onChange: {
            description: string;
            action: string;
        };
    };
};
export default _default;
export declare const basicSelect: {
    args: {
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
};
export declare const withPreselectedOption: {
    args: {
        label: string;
        options: {
            label: string;
            value: string;
        }[];
        value: string;
    };
};
