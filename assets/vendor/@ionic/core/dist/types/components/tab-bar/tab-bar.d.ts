import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { Color } from '../../interface';
import type { TabBarChangedEventDetail } from './tab-bar-interface';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export declare class TabBar implements ComponentInterface {
    private keyboardCtrl;
    el: HTMLElement;
    keyboardVisible: boolean;
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    color?: Color;
    /**
     * The selected tab component
     */
    selectedTab?: string;
    selectedTabChanged(): void;
    /**
     * If `true`, the tab bar will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */
    translucent: boolean;
    /** @internal */
    ionTabBarChanged: EventEmitter<TabBarChangedEventDetail>;
    /**
     * @internal
     * This event is used in IonContent to correctly
     * calculate the fullscreen content offsets
     * when IonTabBar is used.
     */
    ionTabBarLoaded: EventEmitter<void>;
    componentWillLoad(): void;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    componentDidLoad(): void;
    render(): any;
}
