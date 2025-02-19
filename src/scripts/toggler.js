export default class {
    constructor(item = [], defaultClass = "") {
        this.list = item;
        this.current = null
        this.defaultClass = defaultClass;
    }

    updateClass(clsname) {
        this.defaultClass = clsname;
    }

    detachClassNames(clsname = this.defaultClass) {
        this.list.forEach(item => {
            item.className.remove(clsname);
        })
    }

    attachClassName(clsname = this.defaultClass) {
        this.current.className.add(clsname)
    }
}