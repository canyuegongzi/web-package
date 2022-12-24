export const checkAuthFail = (...args: any[]) => false;
export const checkAuthSuccess = (...args: any[]) => true;
export const adapter = (res: any) => Promise.resolve(true);

export interface CheckAuthOptions {
    checkAuthFail?: (...args: any[]) => any;
    checkAuthSuccess?: (...args: any[]) => any;
    adapter?: (...args: any[]) => Promise<boolean>;
    config?: Record<any, any>;
}

const defaultConfig = {};

export class Auth {
    private userInfo!: Record<any, any>;

    /**
     * 鉴权
     */
    public async checkAuth(
        options: CheckAuthOptions = {
            checkAuthFail,
            checkAuthSuccess,
            adapter,
            config: {},
        },
    ) {
        return new Promise(async resolve => {
            const checkAuthFailFun = options.checkAuthFail || checkAuthFail;
            const checkAuthSuccessFun = options.checkAuthSuccess || checkAuthSuccess;
            const adapterFun: any = options.adapter || adapter;
            const config = Object.assign(defaultConfig, options.config || {});
            let res;
            if (typeof adapterFun === 'function') {
                res = await adapterFun(config);
            }
            if (typeof adapterFun === 'boolean') {
                res = adapterFun;
            }
            if (!res) {
                checkAuthFailFun(res);
            } else {
                checkAuthSuccessFun(res);
            }
            resolve(res);
        });
    }

    /**
     * 更新用户信息
     */
    public updateUserInfo(userInfo: Record<any, any>) {
        this.userInfo = userInfo;
    }

    get user() {
        return this.userInfo;
    }
}

export default new Auth();
