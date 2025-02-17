import TASK from "./task";
export default class {
    constructor(tasks = []) {
        this.tasks = tasks
    }

    // get total task count
    getTotalTasks() {
        return this.tasks.length;
    }

    // add a single task to all tasks
    add(title, description = null, subtask = null, due_date = null, due_time = null, status = false, pLevel = 0) {
        const idx = this.getTotalTasks();
        const task = new TASK(idx, title, description, subtask, due_date, due_date, due_time, status, pLevel);
        this.tasks.push(task);
        this.render()
        return idx
    }

    // delete a task
    delete(id) {
        const idx_obj = this.read(id);
        const idx = this.tasks.indexOf(idx_obj);
        this.tasks.splice(idx, 1);
        this.render()
    }

    // read a task
    read(idx) {
        const filtered = this.tasks.filter(item => item.id === idx);
        return filtered[0]
    }

    // update a task
    update(id, updatedObj) {
        const idx_obj = this.read(id);
        if (idx_obj) {
            const idx = this.tasks.indexOf(idx_obj);
            if (idx >= 0) {
                const temp = {
                    ...idx_obj,
                    ...updatedObj
                }

                const obj = new TASK(idx, temp.title, temp.status, temp.description, temp.subtask, temp.due_date, temp.due_time, temp.pLevel)
                this.tasks.splice(idx, 1, obj)
            }
        }

    }

    render() {
        console.log(this.tasks)
    }
}