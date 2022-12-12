const projectArrayMethods = {
    pushProject: {
        value: function (project) {
            project.setProjectId(this.length)
            this.push(project)
        },
    },

    deleteProject: {
        value: function (project) {
            const id = project.getProjectId()
            this.splice(id, 1)
            this.updateProjectIds()
        },
    },

    updateProjectIds: {
        value: function () {
            if (this.length <= 0) return
            for (let i = 0; i < this.length; i++) {
                this[i].setProjectId(i)
            }
        },
    },
}

export default projectArrayMethods
