import VirtualMachine from "../index";

/**
 * NuclearMod VM
 *
 * Extends the real Scratch VM instead of pretending
 * a few methods constitute an entire programming runtime.
 */
class NuclearModVM extends VirtualMachine {
    constructor() {
        super();

        this.nuclearMod = {
            version: 1,
            projectExtension: ".nuke"
        };
    }

    getNuclearModInfo() {
        return {
            name: "NuclearMod VM",
            version: this.nuclearMod.version,
            projectExtension: this.nuclearMod.projectExtension
        };
    }

    async loadNukeProject(project) {
        if (!project) {
            throw new Error("No .nuke project supplied.");
        }

        await this.loadProject(project);

        return this;
    }

    exportNukeProject() {
        return {
            format: "NuclearMod",
            version: this.nuclearMod.version,
            extension: ".nuke",
            project: JSON.parse(this.toJSON())
        };
    }
}

export default NuclearModVM;
import NuclearModVM from "../packages/scratch-vm/src/nuclearmod";

const vm = new NuclearModVM();

vm.attachAudioEngine();

vm.on("PROJECT_RUN_START", () => {
    console.log("NuclearMod project started.");
});

vm.on("PROJECT_RUN_STOP", () => {
    console.log("NuclearMod project stopped.");
});

export default vm;