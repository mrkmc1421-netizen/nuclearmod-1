// src/nuclearmod/blocks.js

import {
    initializeScratchBlocks,
    createWorkspace
} from "../../packages/scratch-blocks/src/nuclearmod/scratch-blocks";

export function createNuclearBlocks(container, toolbox) {
    initializeScratchBlocks();

    return createWorkspace(
        container,
        toolbox
    );
}