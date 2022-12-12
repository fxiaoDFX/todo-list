import createProject from "./projectObject"
import projectArrayMethods from "./projectArrayMethods"
// Module to load page start up when user first opens the page, initialize
// project array and sets title to first project to 'Default Project'

Object.defineProperties(Array.prototype, projectArrayMethods)

export default function blankProjectLoad() {
    console.log("Creating empty project array...")
    const projectArr = []
    const defaultProject = createProject("Default Project")
    projectArr.pushProject(defaultProject)
    console.log("Added Default project to array")
    return projectArr
}
