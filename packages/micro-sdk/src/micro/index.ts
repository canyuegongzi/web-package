import { MicroAppResponseItem } from "./type";
import { RegistrableApp } from 'qiankun';
import { event } from "../app";

/**
 * 子应用触发规则
 * @param location
 * @param hash
 */
export const microActiveRule = (location: Location, hash: string) => {
    return location.hash.indexOf(hash) > -1;
};

/**
 * 初始化子应用
 * @param list
 * @param container
 */
export const getMicroApps = (list: MicroAppResponseItem[] = [], container: string = '#micro-viewport'): RegistrableApp<any>[] => {
    return list.map((item) => {
        return {
            ...item,
            activeRule: (location) => microActiveRule(location, item.base),
            container: container, // 子应用挂载的div
            props: {
                getGlobalState: {
                    app: 'main',
                },
                globalEvent: event
            },
        };
    });
};
