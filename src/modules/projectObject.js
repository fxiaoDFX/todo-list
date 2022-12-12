import createTask from "./task"

export default function createProject(title, dueDate, priority, description) {
    const project = Object.create(projectMethods)
    project.title = title
    project.dueDate = dueDate
    project.priority = priority
    project.description = description
    project.taskList = []
    project.numberOfTasks = 0
    project.id = null
    return project
}

const projectMethods = {
    getTitle() {
        return this.title
    },

    getDate() {
        return this.dueDate
    },

    getPriority() {
        return this.priority
    },

    getDescription() {
        return this.description
    },

    getNumberOfTasks() {
        return this.numberOfTasks
    },

    getTask(index) {
        return this.taskList[index]
    },

    getProjectId() {
        return this.id
    },

    setProjectId(id) {
        this.id = id
    },

    setTitle(title) {
        this.title = title
    },

    setDueDate(dueDate) {
        this.dueDate = dueDate
    },

    setPriority(priority) {
        this.priority = priority
    },

    setDescription(description) {
        this.description = description
    },

    addTask(task, description) {
        if (!task) task = createTask(description)
        task.setTaskId(this.getNumberOfTasks())
        console.log("task id set", task.getTaskId())
        this.taskList.push(task)
        this.numberOfTasks++
        return task
    },

    deleteTask(task) {
        const taskId = task.getTaskId()
        this.taskList.splice(taskId, 1)
        this.numberOfTasks--
        this.updateIdOfTasksInList()
    },

    printTasks() {
        for (let i = 0; i < this.taskList.length; i++) {
            console.log(this.taskList[i])
        }
    },

    // helper
    updateIdOfTasksInList() {
        if (this.numberOfTasks <= 0) {
            console.log("Empty task list")
            return
        }
        for (let i = 0; i < this.taskList.length; i++) {
            this.taskList[i].setTaskId(i)
        }
    },
}
