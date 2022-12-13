export function initialDOMLoad() {
    const contentDiv = document.querySelector(".content")
    // DOM for heading
    const heading = document.createElement("h1")
    heading.textContent = "Todo List"

    // DOM for the default project load
    const projectListContainer = document.createElement("div")
    projectListContainer.innerText = "My Projects"
    const projectListUnorderedList = document.createElement("ul")
    projectListUnorderedList.classList.add("projectArray")
    projectListContainer.append(projectListUnorderedList)

    // append to contentDiv
    contentDiv.append(heading, projectListContainer)
}
