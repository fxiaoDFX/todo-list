import createProject from "./projectFactoryFunction"
import createTask from "./taskFactoryFunction"

const controller = (() => {
    // DOM element selectors
    // list element
    const listContainer = document.querySelector("[data-list]")
    const newProjectForm = document.querySelector("[data-new-project-form]")
    const newProjectInput = document.querySelector("[data-new-project-input]")

    // buttons
    const deleteProjectButton = document.querySelector(
        "[data-delete-project-button]"
    )
    const deleteCompletedTasksButtons = document.querySelector(
        "[data-clear-tasks-button]"
    )

    // task element
    const taskDisplayContainer = document.querySelector(
        "[data-task-display-container]"
    )
    const taskListContainer = document.querySelector("[data-tasks]")
    const projectTitleElement = document.querySelector("[data-title]")
    const projectDueDateElement = document.querySelector("[data-due-date]")
    const projectDescriptionElement =
        document.querySelector("[data-description]")
    const projectTaskCountElement = document.querySelector("[data-task-count]")

    const newTaskForm = document.querySelector("[data-new-task-form]")
    const newTaskInput = document.querySelector("[data-new-task-input]")

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

    newTaskForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const taskName = newTaskInput.value
        if (taskName === null || taskName === "") return
        const newTask = createTask(taskName)
        const selectedProject = getSelectedProject()

        selectedProject.taskArray.push(newTask)
        newTaskInput.value = null
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

    taskListContainer.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "input") {
            const selectedProject = getSelectedProject()
            const taskId = e.target.id
            const clickedTask = getClickedTask(selectedProject, taskId)
            clickedTask.complete = clickedTask.complete ? false : true
            saveAndRender()
        }
    })

    function getClickedTask(selectedProject, taskId) {
        return selectedProject.taskArray.find((task) => task.id === taskId)
    }

    deleteProjectButton.addEventListener("click", () => {
        lists = lists.filter((project) => project.id !== selectedListId)
        saveAndRender()
    })

    deleteCompletedTasksButtons.addEventListener("click", () => {
        const selectedProject = getSelectedProject()
        selectedProject.taskArray = selectedProject.taskArray.filter(
            (task) => task.complete === false
        )
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

        const selectedProject = getSelectedProject()

        if (!selectedProject) {
            taskDisplayContainer.style.display = "none"
        } else {
            taskDisplayContainer.style.display = ""
            projectTitleElement.textContent = selectedProject.title
            renderTaskCount(selectedProject)
            renderTaskList(selectedProject)
        }
    }

    function renderTaskList(selectedProject) {
        clearContainer(taskListContainer)
        selectedProject.taskArray.forEach((task) => {
            const taskElement = document.createElement("li")
            taskElement.classList.add("task")
            taskElement.dataset.taskId = task.id
            const taskCheckboxElement = document.createElement("input")
            taskCheckboxElement.setAttribute("type", "checkbox")
            taskCheckboxElement.setAttribute("id", task.id)
            taskCheckboxElement.checked = task.complete
            const taskLabel = document.createElement("label")
            const span = document.createElement("span")
            span.classList.add("custom-checkbox")
            // taskLabel.setAttribute("for", task.id)
            span.textContent = task.name
            taskLabel.append(span)

            taskElement.append(taskCheckboxElement, taskLabel)
            taskListContainer.append(taskElement)
        })
    }

    function renderTaskCount(selectedProject) {
        const incompleteTaskCount = selectedProject.taskArray.filter(
            (task) => !task.complete
        ).length
        const string = incompleteTaskCount === 1 ? "task" : "tasks"
        projectTaskCountElement.textContent = `${incompleteTaskCount} ${string} remain`
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

    function getSelectedProject() {
        return lists.find((project) => project.id === selectedListId)
    }

    return { render }
})()

export default controller
