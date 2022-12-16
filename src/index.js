import "./style.css"
import createProject from "./modules/projectFactoryFunction"
import { DOM } from "./modules/DOMLoaderFunction"
import controller from "./modules/controller"

console.log(createProject("Snacks"))

DOM.loadContentStartup()

controller
