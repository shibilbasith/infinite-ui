import { type InfiniteAccordionProps } from "./types";
declare const _default: {
    title: string;
    component: import("react").FC<InfiniteAccordionProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        allowMultiple: {
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
export declare const SingleOpen: {
    args: {
        allowMultiple: boolean;
        items: import("./types").InfiniteAccordionItem[];
    };
};
export declare const MultipleOpen: {
    args: {
        allowMultiple: boolean;
        items: import("./types").InfiniteAccordionItem[];
    };
};
