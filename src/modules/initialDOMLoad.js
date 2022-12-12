export function initialDOMLoad() {
    const contentDiv = document.querySelector(".content")
    // DOM for heading
    const heading = document.createElement("h1")
    heading.textContent = "Todo List"

    // DOM for the default project load
    const projectListDiv = document.createElement("div")
    projectListDiv.textContent = "Projects"

    // append to contentDiv
    contentDiv.append(heading, projectListDiv)
}
