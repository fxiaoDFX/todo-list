const controller = (() => {
    const listContainer = document.querySelector("[data-list]")
    let list = ["grocery", "things"]

    function render() {
        clearContainer(listContainer)
        list.forEach((item) => {
            const listElement = document.createElement("li")
            listElement.classList.add("listName")
            listElement.innerText = item
            listContainer.append(listElement)
        })
    }
    return { render }
})()

function clearContainer(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

export default controller
