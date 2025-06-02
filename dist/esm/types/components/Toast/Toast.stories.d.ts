declare const _default: {
    title: string;
    component: {
        success: (message: string, duration?: number) => void;
        error: (message: string, duration?: number) => void;
        info: (message: string, duration?: number) => void;
        warning: (message: string, duration?: number) => void;
    };
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        message: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: string;
        };
        type: {
            description: string;
            control: {
                type: string;
            };
            options: string[];
            defaultValue: string;
        };
    };
};
export default _default;
export declare const ToastExample: (args: {
    message: string;
    type: "success" | "error" | "info";
}) => import("react/jsx-runtime").JSX.Element;
