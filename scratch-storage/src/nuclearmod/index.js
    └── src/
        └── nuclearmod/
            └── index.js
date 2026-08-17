// packages/scratch-storage/src/nuclearmod/index.js

import Storage from "../index";

const NUKE_EXTENSION = ".nuke";

class NuclearModStorage extends Storage {
    constructor(options = {}) {
        super(options);

        this.nuclearMod = {
            name: "NuclearMod",
            version: 1,
            extension: NUKE_EXTENSION
        };
    }

    getNuclearModInfo() {
        return {
            name: this.nuclearMod.name,
            version: this.nuclearMod.version,
            extension: this.nuclearMod.extension
        };
    }

    isNukeFile(filename) {
        return String(filename)
            .toLowerCase()
            .endsWith(NUKE_EXTENSION);
    }

    async readNukeFile(file) {
        if (!this.isNukeFile(file.name)) {
            throw new Error("Not a .nuke project.");
        }

        return file.arrayBuffer();
    }

    createNukeFilename(name = "MyProject") {
        const cleanName = String(name)
            .replace(/\.nuke$/i, "");

        return `${cleanName}${NUKE_EXTENSION}`;
    }
}

export default NuclearModStorage;