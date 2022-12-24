import Config from './Config';
import { ConfigOptions } from './type';
let __config__: Config;
const init = (config: ConfigOptions) => {
    if (!__config__) {
        __config__ = new Config(config);
    }
    return __config__;
};

const registerGlobalConfig = (config: ConfigOptions) => {
    // @ts-ignore
    return (window.__SETTING__ = init(config));
};

export { Config, registerGlobalConfig };
export default init;
