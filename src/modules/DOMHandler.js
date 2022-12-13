import { initialDOMLoad } from "./initialDOMLoad"
import createProjectElementDOM from "./projectArrayElementsToDOM"
import createProject from "./projectObject"
import { LOCAL_STORAGE_LIST_KEY } from "../index"

// TODO: load all project from array to DOM
export default function handler(projectArray) {
    initialDOMLoad()
    const contentContainer = document.querySelector(".content")
    const listContainer = document.querySelector(".projectArray")
    // load first project array to DOM
    renderProjectList(projectArray, listContainer)

    // load form
    listFormToDOM(contentContainer)

    // form event listener
    formEventListener(projectArray)
}

function save(projectArray) {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(projectArray))
}

function saveAndRender(projectArray, listContainer) {
    save(projectArray)
    renderProjectList(projectArray, listContainer)
}

function renderProjectList(projectArray, listContainer) {
    clearElement(listContainer)
    projectArray.forEach((item) => {
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
    form.classList.add("projectForm")
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

function formEventListener(projectArray) {
    const listContainer = document.querySelector(".projectArray")
    const form = document.querySelector(".projectForm")
    const input = document.querySelector("input.new.project")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const projectName = input.value
        if (projectName === "" || projectName === null) {
            console.log("empty")
            return
        }
        const newProject = createProject(projectName)
        // clear input field
        input.value = null
        projectArray.pushProject(newProject)
        saveAndRender(projectArray, listContainer)
        console.log(projectArray)
    })
}
