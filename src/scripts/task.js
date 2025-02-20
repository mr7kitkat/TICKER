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

    render_inline() {
        return `
        <section class="task">
            <section class="details">
                <input type="checkbox" name="task" data-id=${this.id} />
                <span class="title">${this.title}</span>
            </section>
            <section class="modification">
                <button class="edit" data-id=${this.id}>
                <img src="./src/assets/icons/pencil.png" alt="" />
                </button>
                <button class="delete" data-id=${this.id}>
                <img src="./src/assets/icons/bin.png" alt="" />
                </button>
            </section>
        </section>
        `
    }
}
