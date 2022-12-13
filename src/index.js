import "./style.css"
import defaultProjectLoader from "./modules/defaultProjectLoader"
import DOMHandler from "./modules/DOMHandler"
import createProject from "./modules/projectObject"
import createTask from "./modules/task"

export const LOCAL_STORAGE_LIST_KEY = "project.lists"
let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

if (projectList.length === 0) defaultProjectLoader(projectList)
DOMHandler(projectList)

// TODO: click event module HERE for project creation
// This event handler should detect for new project creation which then calls
// another module that shows an input box for user to add project information.

// TODO: input box module, after user is done entering info. Call another module
// to create project todo box with the user info entered previously, adds
// project to project list

// TODO: adds project to project list module

// TODO: click event handler for clicking on project from project list.  This
// module should call for drawing of project's checklist.

// TO CONSIDER: Consider adding a controller that calls for click all click
// events
