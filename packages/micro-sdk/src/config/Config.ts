import { AppConfig, ConfigOptions, LayoutConfig } from './type';

class Config {
    constructor(config: ConfigOptions) {
        this.app = config.app;
        this.layout = config.layout;
    }

    public app: AppConfig = {
        micro: () => false,
        microPath: '',
    };

    public layout: LayoutConfig = {
        NORMAL_MENU_LEFT_NORMAL_WIDTH: 210,
        NORMAL_MENU_LEFT_CLOSED_WIDTH: 54,
        LAYOUT_TYPE: 'LR',
    };
}

export default Config;
