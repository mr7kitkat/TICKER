import TASK from "./task"

export default class {
    constructor(items = []) {
        this.items = items;
    }

    get totalCount() {
        return this.items.length;
    }

    get completedCount() {
        return this.items.filter(item => item.status === true).length;
    }

    get uncompleteCount() {
        return this.items.filter(item => item.status === false).length;
    }

    add(title) {
        const id = this.totalCount;
        const newTask = new TASK(id, title);
        this.items.push(newTask)
    }

    update(id, updateObject) {
        let currentIdx;
        this.tasks.forEach((item, idx) => {
            if (item.id === id) {
                currentIdx = idx;
            }
        });

        if (!currentIdx) return;
        const temp = {
            ...this.tasks[currentIdx],
            ...updateObject
        }

        const { id, title, status } = temp;
        const newTask = new TASK(id, title, status);
        this.tasks.splice(currentIdx, 1, newTask);
    }

    delete(id) {
        let currentIdx;
        this.tasks.forEach((item, idx) => {
            if (item.id === id) {
                currentIdx = idx;
            }
        });

        if (!currentIdx) return;

        this.tasks.splice(currentIdx, 1);
    }

    getTaskById(id) {
        return this.tasks.filter(task => task.id === id);
    }

    getTaskByTitle(title) {
        return this.tasks.filter(task => {
            const taskTitle = task.toUpperCase();
            const target = title.toUpperCase();
            return taskTitle.includes(target)
        })
    }
}