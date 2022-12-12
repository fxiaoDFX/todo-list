export default function createProjectBoxElement(project) {
    const titleName = project.getTitle()
    const div = document.createElement("div")
    const projectTitle = document.createElement("h3")
    projectTitle.innerText = titleName
    div.append(projectTitle)
    return div
}
