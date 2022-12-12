import "./style.css"
import { projectStartupLoad } from "./modules/projectStartupLoad"
import { initialDOMLoad } from "./modules/initialDOMLoad"
import createProject from "./modules/projectObject"

//projectStartupLoad()

//initialDOMLoad()

const p1 = createProject("Grocery")
console.log(p1.getTitle())
p1.addToTaskList("Carrots")

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
