/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { createColorClasses } from "../../utils/theme";
import { getIonMode } from "../../global/ionic-global";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class CardHeader {
    constructor() {
        this.color = undefined;
        this.translucent = false;
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { key: '64246b81931203a64d553c788cd736f41e23f37b', class: createColorClasses(this.color, {
                'card-header-translucent': this.translucent,
                'ion-inherit-color': true,
                [mode]: true,
            }) }, h("slot", { key: 'af2da2dfe266889afeb57fac25c6a730558dbba4' })));
    }
    static get is() { return "ion-card-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "ios": ["card-header.ios.scss"],
            "md": ["card-header.md.scss"]
        };
    }
    static get styleUrls() {
        return {
            "ios": ["card-header.ios.css"],
            "md": ["card-header.md.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Color",
                    "resolved": "\"danger\" | \"dark\" | \"light\" | \"medium\" | \"primary\" | \"secondary\" | \"success\" | \"tertiary\" | \"warning\" | string & Record<never, never> | undefined",
                    "references": {
                        "Color": {
                            "location": "import",
                            "path": "../../interface",
                            "id": "src/interface.d.ts::Color"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The color to use from your application's color palette.\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\nFor more information on colors, see [theming](/docs/theming/basics)."
                },
                "attribute": "color",
                "reflect": true
            },
            "translucent": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If `true`, the card header will be translucent.\nOnly applies when the mode is `\"ios\"` and the device supports\n[`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility)."
                },
                "attribute": "translucent",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
