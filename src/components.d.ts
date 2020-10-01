/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonSize, ButtonType, ButtonWidth, IconPosition } from "@global/types/button.type";
import { IconName, IconType } from "@global/types/icon.type";
import { TextAlign, TextColor, TextSize, TextWeight } from "@global/types/text.type";
export namespace Components {
    interface UiBpmButton {
        "behavior": string;
        "disabled": boolean;
        "iconName": IconName;
        "iconPosition": IconPosition;
        "iconSize": "sm";
        "isLoading": false;
        "label": string;
        "size": ButtonSize;
        "type": ButtonType;
        "width": ButtonWidth;
    }
    interface UiBpmIcon {
        "color": string;
        "height": string;
        "iconId": "id";
        "name": IconName;
        "type": IconType;
        "value": string;
        "width": string;
    }
    interface UiBpmInput {
    }
    interface UiBpmText {
        "align": TextAlign;
        "color": TextColor;
        "size": TextSize;
        "underLine": boolean;
        "value": string;
        "weight": TextWeight;
    }
}
declare global {
    interface HTMLUiBpmButtonElement extends Components.UiBpmButton, HTMLStencilElement {
    }
    var HTMLUiBpmButtonElement: {
        prototype: HTMLUiBpmButtonElement;
        new (): HTMLUiBpmButtonElement;
    };
    interface HTMLUiBpmIconElement extends Components.UiBpmIcon, HTMLStencilElement {
    }
    var HTMLUiBpmIconElement: {
        prototype: HTMLUiBpmIconElement;
        new (): HTMLUiBpmIconElement;
    };
    interface HTMLUiBpmInputElement extends Components.UiBpmInput, HTMLStencilElement {
    }
    var HTMLUiBpmInputElement: {
        prototype: HTMLUiBpmInputElement;
        new (): HTMLUiBpmInputElement;
    };
    interface HTMLUiBpmTextElement extends Components.UiBpmText, HTMLStencilElement {
    }
    var HTMLUiBpmTextElement: {
        prototype: HTMLUiBpmTextElement;
        new (): HTMLUiBpmTextElement;
    };
    interface HTMLElementTagNameMap {
        "ui-bpm-button": HTMLUiBpmButtonElement;
        "ui-bpm-icon": HTMLUiBpmIconElement;
        "ui-bpm-input": HTMLUiBpmInputElement;
        "ui-bpm-text": HTMLUiBpmTextElement;
    }
}
declare namespace LocalJSX {
    interface UiBpmButton {
        "behavior"?: string;
        "disabled"?: boolean;
        "iconName"?: IconName;
        "iconPosition"?: IconPosition;
        "iconSize"?: "sm";
        "isLoading"?: false;
        "label"?: string;
        "onClicked"?: (event: CustomEvent<any>) => void;
        "size"?: ButtonSize;
        "type"?: ButtonType;
        "width"?: ButtonWidth;
    }
    interface UiBpmIcon {
        "color"?: string;
        "height"?: string;
        "iconId"?: "id";
        "name"?: IconName;
        "type"?: IconType;
        "value"?: string;
        "width"?: string;
    }
    interface UiBpmInput {
    }
    interface UiBpmText {
        "align"?: TextAlign;
        "color"?: TextColor;
        "size"?: TextSize;
        "underLine"?: boolean;
        "value"?: string;
        "weight"?: TextWeight;
    }
    interface IntrinsicElements {
        "ui-bpm-button": UiBpmButton;
        "ui-bpm-icon": UiBpmIcon;
        "ui-bpm-input": UiBpmInput;
        "ui-bpm-text": UiBpmText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ui-bpm-button": LocalJSX.UiBpmButton & JSXBase.HTMLAttributes<HTMLUiBpmButtonElement>;
            "ui-bpm-icon": LocalJSX.UiBpmIcon & JSXBase.HTMLAttributes<HTMLUiBpmIconElement>;
            "ui-bpm-input": LocalJSX.UiBpmInput & JSXBase.HTMLAttributes<HTMLUiBpmInputElement>;
            "ui-bpm-text": LocalJSX.UiBpmText & JSXBase.HTMLAttributes<HTMLUiBpmTextElement>;
        }
    }
}
