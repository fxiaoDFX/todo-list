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
    list.classList.add("list")
    const form = makeForm()
    listContainer.append(title, list, form)
    return listContainer
}

function makeForm() {
    const form = document.createElement("form")
    const input = document.createElement("input")
    const button = document.createElement("button")
    button.classList.add("button", "create")
    form.append(button, input)
    return form
}

function makeTaskList() {
    const taskContainer = document.createElement("div")
    const name = document.createElement("h4")
    name.textContent = "Project Name"
    const taskRemaining = document.createElement("h6")
    const titleContainer = document.createElement("div")
    titleContainer.append(name, taskRemaining)
    taskRemaining.textContent = "0 tasks remain"
    const list = document.createElement("ul")
    const form = makeForm()
    taskContainer.append(titleContainer, list, form)
    return taskContainer
}

export { DOM }
