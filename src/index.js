import createProject from "./modules/projectFactoryFunction"
import { DOM } from "./modules/DOMLoaderFunction"
import "./style.css"

console.log(createProject("Snacks"))

DOM.loadContentStartup()
