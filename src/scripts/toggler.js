export default class {
    constructor(list, defaultClass) {
        this.list = list
        this.defaultClass = defaultClass
        this.evenTrigger();
        this.addClass(this.list[0].hash)
    }

    removeClass() {
        this.list.forEach(element => {
            const target = document.querySelector(element.hash);
            target.classList.remove(this.defaultClass);
        });
    }

    addClass(hash) {
        const target = document.querySelector(hash);
        target.classList.add(this.defaultClass);
    }

    evenTrigger() {
        this.list.forEach(elem => {
            elem.addEventListener("click", () => {
                this.removeClass()
                this.addClass(elem.hash)
            })
        })
    }
}