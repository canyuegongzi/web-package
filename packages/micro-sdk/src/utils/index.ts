export const getRouterPath = (path: string): string => {
    // @ts-ignore
    const app = window?.__SETTING__?.app;
    if (!app) {
        return path;
    }
    const { micro, microPath } = app;
    if (!micro || (typeof micro === 'function' && !micro())) {
        return path;
    }
    if (!microPath) return path;
    return `${microPath}${path}`;
};
