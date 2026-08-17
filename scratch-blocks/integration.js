import * as Blockly from "blockly";

/**
 * NuclearMod Scratch Blocks integration.
 */

export function createNuclearModWorkspace(container, options = {}) {
    if (!container) {
        throw new Error("NuclearMod Blocks requires a container.");
    }

    const workspace = Blockly.inject(container, {
        toolbox: options.toolbox || null,
        trashcan: true,
        scrollbars: true,
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1,
            maxScale: 2,
            minScale: 0.5
        }
    });

    return workspace;
}

export function disposeNuclearModWorkspace(workspace) {
    if (workspace) {
        workspace.dispose();
    }
}