export default function createProject(title) {
    return {
        title: title,
        description: "",
        priority: -1,
        dueDate: "",
        id: Date.now().toString(),
        taskArray: [],
    }
}
