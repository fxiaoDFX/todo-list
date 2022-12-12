export default function createTask(description) {
    const task = Object.create(taskMethods)
    task.description = description
    task.id = null
    return task
}

const taskMethods = {
    getDescription() {
        return this.description
    },

    getTaskId() {
        return this.id
    },

    setDescription(description) {
        this.description = description
    },

    setTaskId(id) {
        this.id = id
    },
}
