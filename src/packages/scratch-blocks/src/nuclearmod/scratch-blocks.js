// packages/scratch-blocks/src/nuclearmod/scratch-blocks.js

import Blockly from "../index";
import "../blocks";

export function initializeScratchBlocks() {
    if (!Blockly) {
        throw new Error("Scratch Blocks failed to initialize.");
    }

    return Blockly;
}

export function createWorkspace(container, toolbox) {
    const workspace = Blockly.inject(container, {
        toolbox,
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

export default Blockly;