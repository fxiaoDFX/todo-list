const DOM = (() => {
    const body = document.querySelector("body")
    const content = document.querySelector(".content")
    function loadContentStartup() {
        const header = makeHeader()
        const footer = makeFooter()
        body.insertBefore(header, content)
        body.append(footer)

        const list = makeProjectList()
        const taskList = makeTaskList()
        content.append(list, taskList)
    }
    return { loadContentStartup }
})()

function makeHeader() {
    const headerDiv = document.createElement("div")
    const title = document.createElement("h1")
    title.innerText = "TODO App"
    headerDiv.append(title)
    headerDiv.classList.add("header")
    return headerDiv
}

function makeFooter() {
    const footerDiv = document.createElement("div")
    const title = document.createElement("p")
    title.innerText = "Footer"
    footerDiv.append(title)
    footerDiv.classList.add("footer")
    return footerDiv
}

function makeProjectList() {
    const listContainer = document.createElement("div")
    listContainer.classList.add("listContainer")
    const title = document.createElement("h3")
    title.innerText = "My Projects"
    const list = document.createElement("ul")
    list.classList.add("projectList")
    list.setAttribute("data-list", "")
    const form = makeForm()
    listContainer.append(title, list, form)
    return listContainer
}

function makeForm() {
    const form = document.createElement("form")
    const input = document.createElement("input")
    const button = document.createElement("button")
    form.append(button, input)
    button.setAttribute("aria-label", "create new project")
    button.setAttribute("class", "btn create")
    input.setAttribute("aria-label", "craete new project")
    input.setAttribute("class", "new project")
    return form
}

function makeTaskList() {
    const taskContainer = document.createElement("div")
    const name = document.createElement("h4")
    name.textContent = "Project Name"

    const dueDate = document.createElement("h5")
    const description = document.createElement("p")
    dueDate.setAttribute("id", "dueDate")
    description.setAttribute("id", "description")

    const taskRemaining = document.createElement("h6")
    const titleContainer = document.createElement("div")
    titleContainer.append(name, taskRemaining, dueDate, description)
    taskRemaining.textContent = "0 tasks remain"
    const list = document.createElement("ul")
    list.classList.add("taskList")
    const form = makeForm()

    const clearCompletedTasks = document.createElement("button")
    const deleteProject = document.createElement("button")
    clearCompletedTasks.classList.add("clearTasks", "btn")
    deleteProject.classList.add("removeProject", "btn")
    clearCompletedTasks.textContent = "Clear Completed Tasks"
    deleteProject.textContent = "Delete Project"

    taskContainer.append(
        titleContainer,
        list,
        form,
        clearCompletedTasks,
        deleteProject
    )

    return taskContainer
}

export { DOM }
