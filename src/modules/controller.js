import createProject from "./projectFactoryFunction"

const controller = (() => {
    const listContainer = document.querySelector("[data-list]")
    const newProjectForm = document.querySelector("[data-new-project-form]")
    const newProjectInput = document.querySelector("[data-new-project-input]")
    const deleteProjectButton = document.querySelector(
        "[data-delete-project-button]"
    )
    const taskDisplayContainer = document.querySelector(
        "[data-task-display-container]"
    )
    const projectTitleElement = document.querySelector("[data-title]")
    const projectDueDateElement = document.querySelector("[data-due-date]")
    const projectDescriptionElement =
        document.querySelector("[data-description]")
    const projectTaskCountElement = document.querySelector("[data-task-count]")

    // Local Storage Keys
    const LOCAL_STORAGE_LIST_KEY = "project.list"
    const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "project.selectedListId"

    // value that will be used in local storage
    let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [
        createProject("Default"),
    ]
    let selectedListId = localStorage.getItem(
        LOCAL_STORAGE_SELECTED_LIST_ID_KEY
    )

    // event listeners
    newProjectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const projectName = newProjectInput.value
        if (projectName === null || projectName === "") return
        const newList = createProject(projectName)
        lists.push(newList)
        newProjectInput.value = null
        saveAndRender()
    })

    listContainer.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "li") {
            if (e.target.classList.contains("active-list")) {
                e.target.classList.remove("active-list")
                selectedListId = null
            } else selectedListId = e.target.dataset.listId
            saveAndRender()
        }
    })

    deleteProjectButton.addEventListener("click", () => {
        lists = lists.filter((project) => project.id !== selectedListId)
        saveAndRender()
    })

    // functions
    function saveAndRender() {
        save()
        render()
    }

    function save() {
        localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
        localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
    }

    function render() {
        clearContainer(listContainer)
        renderList()

        const selectedProject = lists.find(
            (project) => project.id === selectedListId
        )
        if (!selectedProject) {
            taskDisplayContainer.style.display = "none"
        } else {
            taskDisplayContainer.style.display = ""
            projectTitleElement.textContent = selectedProject.title
            projectTaskCountElement.textContent =
                selectedProject.taskArray.length === 0
                    ? `${selectedProject.taskArray.length} task remain`
                    : `${selectedProject.taskArray.length} tasks remain`
        }
    }

    function renderList() {
        lists.forEach((project) => {
            const listElement = document.createElement("li")
            listElement.dataset.listId = project.id
            listElement.classList.add("listName")
            listElement.innerText = project.title
            if (project.id === selectedListId) {
                listElement.classList.add("active-list")
            }
            listContainer.append(listElement)
        })
    }

    function clearContainer(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }

    return { render }
})()

export default controller
