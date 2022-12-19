export default function createProject(title) {
    return {
        title: title,
        description: "",
        priority: 0,
        dueDate: "",
        id: Date.now().toString(),
        taskArray: [],
    }
}
