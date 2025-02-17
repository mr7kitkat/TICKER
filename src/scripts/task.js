export default class {
    constructor(id, title, status = false, description = null, subtask = null, due_date = null, due_time = null, pLevel = 0) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.subtask = subtask;
        this.due_date = due_date;
        this.due_time = due_time;
        this.status = status
        this.pLevel = 0
    }

    changeStatus(currentStatus) {
        this.status = currentStatus;
    }

}
