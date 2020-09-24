/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IconColor, IconName, IconSize } from "@global/types/icon.type";
import { TextColor, TextSize, TextWeight } from "@global/types/text.type";
export namespace Components {
    interface UiDropdown {
        "items": { label: string; value: string }[];
        "placeholder": string;
        "value": string;
    }
    interface UiIcon {
        "color": IconColor;
        "name": IconName;
        "size": IconSize;
    }
    interface UiSidebarHeader {
    }
    interface UiTesteo {
    }
    interface UiText {
        "color": TextColor;
        "size": TextSize;
        "weight": TextWeight;
    }
    interface UiTitle {
    }
    interface UiTooltip {
    }
}
declare global {
    interface HTMLUiDropdownElement extends Components.UiDropdown, HTMLStencilElement {
    }
    var HTMLUiDropdownElement: {
        prototype: HTMLUiDropdownElement;
        new (): HTMLUiDropdownElement;
    };
    interface HTMLUiIconElement extends Components.UiIcon, HTMLStencilElement {
    }
    var HTMLUiIconElement: {
        prototype: HTMLUiIconElement;
        new (): HTMLUiIconElement;
    };
    interface HTMLUiSidebarHeaderElement extends Components.UiSidebarHeader, HTMLStencilElement {
    }
    var HTMLUiSidebarHeaderElement: {
        prototype: HTMLUiSidebarHeaderElement;
        new (): HTMLUiSidebarHeaderElement;
    };
    interface HTMLUiTesteoElement extends Components.UiTesteo, HTMLStencilElement {
    }
    var HTMLUiTesteoElement: {
        prototype: HTMLUiTesteoElement;
        new (): HTMLUiTesteoElement;
    };
    interface HTMLUiTextElement extends Components.UiText, HTMLStencilElement {
    }
    var HTMLUiTextElement: {
        prototype: HTMLUiTextElement;
        new (): HTMLUiTextElement;
    };
    interface HTMLUiTitleElement extends Components.UiTitle, HTMLStencilElement {
    }
    var HTMLUiTitleElement: {
        prototype: HTMLUiTitleElement;
        new (): HTMLUiTitleElement;
    };
    interface HTMLUiTooltipElement extends Components.UiTooltip, HTMLStencilElement {
    }
    var HTMLUiTooltipElement: {
        prototype: HTMLUiTooltipElement;
        new (): HTMLUiTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "ui-dropdown": HTMLUiDropdownElement;
        "ui-icon": HTMLUiIconElement;
        "ui-sidebar-header": HTMLUiSidebarHeaderElement;
        "ui-testeo": HTMLUiTesteoElement;
        "ui-text": HTMLUiTextElement;
        "ui-title": HTMLUiTitleElement;
        "ui-tooltip": HTMLUiTooltipElement;
    }
}
declare namespace LocalJSX {
    interface UiDropdown {
        "items"?: { label: string; value: string }[];
        "onValueChange"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface UiIcon {
        "color"?: IconColor;
        "name"?: IconName;
        "size"?: IconSize;
    }
    interface UiSidebarHeader {
    }
    interface UiTesteo {
    }
    interface UiText {
        "color"?: TextColor;
        "size"?: TextSize;
        "weight"?: TextWeight;
    }
    interface UiTitle {
    }
    interface UiTooltip {
    }
    interface IntrinsicElements {
        "ui-dropdown": UiDropdown;
        "ui-icon": UiIcon;
        "ui-sidebar-header": UiSidebarHeader;
        "ui-testeo": UiTesteo;
        "ui-text": UiText;
        "ui-title": UiTitle;
        "ui-tooltip": UiTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ui-dropdown": LocalJSX.UiDropdown & JSXBase.HTMLAttributes<HTMLUiDropdownElement>;
            "ui-icon": LocalJSX.UiIcon & JSXBase.HTMLAttributes<HTMLUiIconElement>;
            "ui-sidebar-header": LocalJSX.UiSidebarHeader & JSXBase.HTMLAttributes<HTMLUiSidebarHeaderElement>;
            "ui-testeo": LocalJSX.UiTesteo & JSXBase.HTMLAttributes<HTMLUiTesteoElement>;
            "ui-text": LocalJSX.UiText & JSXBase.HTMLAttributes<HTMLUiTextElement>;
            "ui-title": LocalJSX.UiTitle & JSXBase.HTMLAttributes<HTMLUiTitleElement>;
            "ui-tooltip": LocalJSX.UiTooltip & JSXBase.HTMLAttributes<HTMLUiTooltipElement>;
        }
    }
}
