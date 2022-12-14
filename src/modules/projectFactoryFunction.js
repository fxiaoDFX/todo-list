export default function createProject(title) {
    return {
        title: title,
        description: "",
        priority: null,
        dueDate: "",
        id: Date.now().toString(),
        taskArray: [],
    }
}
