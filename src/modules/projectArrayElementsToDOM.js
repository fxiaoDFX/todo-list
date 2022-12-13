export default function createProjectElementDOM(project) {
    console.log(project)
    const titleName = project.title
    const listItem = document.createElement("li")
    const projectTitle = document.createElement("h4")
    projectTitle.innerText = titleName
    listItem.setAttribute("id", project.id)
    listItem.classList.add("projectName")
    listItem.append(projectTitle)
    return listItem
}
