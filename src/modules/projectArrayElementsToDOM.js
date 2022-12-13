export default function createProjectElementDOM(project) {
    const titleName = project.getTitle()
    const listItem = document.createElement("li")
    const projectTitle = document.createElement("h4")
    projectTitle.innerText = titleName
    listItem.setAttribute("id", project.getProjectId())
    listItem.classList.add("projectName")
    listItem.append(projectTitle)
    return listItem
}
