import { initialDOMLoad } from "./initialDOMLoad"
import createProjectBoxElement from "./projectArrayElementsToDOM"

// TODO: load all project from array to DOM
export default function handler(projectArray) {
    initialDOMLoad()
    // currently only loads project
    const div = createProjectBoxElement(projectArray[0])
    console.log(div)
    const content = document.querySelector(".projectArray")
    content.append(div)
}
