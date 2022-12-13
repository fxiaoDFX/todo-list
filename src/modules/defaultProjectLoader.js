import createProject from "./projectObject"
import projectArrayMethods from "./projectArrayMethods"
// Module to load page start up when user first opens the page, initialize
// project array and sets title to first project to 'Default Project'

Object.defineProperties(Array.prototype, projectArrayMethods)

export default function defaultProjectLoader(projectArray) {
    console.log("Creating empty project array...")
    const defaultProject = createProject("Default Project")
    projectArray.pushProject(defaultProject)
    console.log("Added Default project to array")
}
