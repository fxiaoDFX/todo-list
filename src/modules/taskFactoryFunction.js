export default function createTask(name) {
    return {
        name: name,
        id: Date.now().toString(),
        complete: false,
    }
}
