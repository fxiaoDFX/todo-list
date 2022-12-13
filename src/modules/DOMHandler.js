import { initialDOMLoad } from "./initialDOMLoad"
import createProjectElementDOM from "./projectArrayElementsToDOM"

// TODO: load all project from array to DOM
export default function handler(projectArray) {
    initialDOMLoad()
    const contentContainer = document.querySelector(".content")
    const listContainer = document.querySelector(".projectArray")
    // load first project array to DOM
    renderProjectList(projectArray, listContainer)

    // load form
    listFormToDOM(contentContainer)
}

function renderProjectList(project, listContainer) {
    clearElement(listContainer)
    project.forEach((item) => {
        const listElement = createProjectElementDOM(item)
        listContainer.append(listElement)
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

function listFormToDOM(element) {
    const form = document.createElement("form")
    const button = document.createElement("button")
    const input = document.createElement("input")
    // set button attritbutes
    button.setAttribute("class", "button create")
    button.setAttribute("aria-label", "create new project")
    // set input attritbutes
    input.setAttribute("type", "text")
    input.setAttribute("class", "new project")
    input.setAttribute("aria-label", "create new project")
    input.setAttribute("placeholder", "new project name")
    form.append(button, input)
    element.append(form)
}
