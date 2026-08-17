// packages/scratch-vm/src/nuclearmod-vm.js

class NuclearModVM {
    constructor() {
        this.project = null;
        this.running = false;
    }

    loadProject(project) {
        this.project = project;
        return this.project;
    }

    start() {
        this.running = true;
    }

    stop() {
        this.running = false;
    }

    toJSON() {
        return JSON.stringify(this.project);
    }

    isRunning() {
        return this.running;
    }
}

module.exports = NuclearModVM;