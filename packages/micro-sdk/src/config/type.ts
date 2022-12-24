export interface AppConfig {
    micro: (...args: any[]) => boolean;
    microPath: string;
}

export interface LayoutConfig {
    [key: string]: any;
}

export interface ConfigOptions {
    app: AppConfig;
    layout: LayoutConfig;
}

// 布局类型 左右 上下
type LayoutType = 'LR' | 'TB';

export interface LayoutSettingConfig {
    NORMAL_MENU_LEFT_NORMAL_WIDTH: number;
    NORMAL_MENU_LEFT_CLOSED_WIDTH: number;
    LAYOUT_TYPE: LayoutType;
}
