import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("./types").RadioGroupProps>;
    tags: string[];
    argTypes: {
        name: {
            description: string;
            control: string;
        };
        groupLabel: {
            description: string;
            control: string;
        };
        orientation: {
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
        variant: {
            description: string;
            control: {
                type: string;
            };
            options: string[];
        };
        disabled: {
            description: string;
            control: string;
        };
        required: {
            description: string;
            control: string;
        };
        value: {
            control: boolean;
            table: {
                disable: boolean;
            };
        };
        onChange: {
            action: string;
            table: {
                category: string;
            };
        };
        onFocus: {
            action: string;
            table: {
                category: string;
            };
        };
        onBlur: {
            action: string;
            table: {
                category: string;
            };
        };
    };
};
export default _default;
export declare const Basic: React.FC;
export declare const Controlled: React.FC;
export declare const Horizontal: {
    args: {
        name: string;
        groupLabel: string;
        orientation: string;
        options: {
            label: string;
            value: string;
        }[];
    };
};
export declare const LargeDanger: {
    args: {
        name: string;
        groupLabel: string;
        variant: string;
        size: string;
        options: {
            label: string;
            value: string;
        }[];
    };
};
export declare const WithDisabledOption: {
    args: {
        name: string;
        groupLabel: string;
        options: ({
            label: string;
            value: string;
            disabled?: undefined;
        } | {
            label: string;
            value: string;
            disabled: boolean;
        })[];
    };
};
export declare const RequiredField: {
    args: {
        name: string;
        groupLabel: string;
        required: boolean;
        options: {
            label: string;
            value: string;
        }[];
    };
};
