interface EventFace {
    on: (name: string, callback: Function) => void,
    emit: (name: string, ...args: Array<any>) => void,
    off: (name: string, fn: Function) => void,
    once: (name: string, fn: Function) => void
}

interface List {
    [key: string]: Array<Function>,
}

export class Dispatch implements EventFace {
    public list: List
    constructor() {
        this.list = {}
    }
    public on(name: string, callback: Function) {
        const callbackList: Array<Function> = this.list[name] || [];
        callbackList.push(callback)
        this.list[name] = callbackList
    }
    public emit(name: string, ...args: Array<any>) {
        let evnetName = this.list[name]
        if (evnetName) {
            evnetName.forEach(fn => {
                fn.apply(this, args)
            })
        }
    }
    public off(name: string, fn: Function) {
        let evnetName = this.list[name]
        if (evnetName && fn) {
            let index = evnetName.findIndex(fns => fns === fn)
            evnetName.splice(index, 1)
        }
    }
    public once(name: string, fn: Function) {
        let decor = (...args: Array<any>) => {
            fn.apply(this, args)
            this.off(name, decor)
        }
        this.on(name, decor)
    }
}

export default new Dispatch();
