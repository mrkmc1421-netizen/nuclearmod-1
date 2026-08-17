/**
 * NuclearMod block definitions.
 */

export const NUCLEAR_BLOCKS = [
    {
        type: "nuclear_when_flag_clicked",
        message0: "when ⚑ clicked",
        nextStatement: null,
        colour: 60,
        tooltip: "Starts the project when the green flag is clicked."
    },

    {
        type: "nuclear_move",
        message0: "move %1 steps",
        args0: [
            {
                type: "field_number",
                name: "STEPS",
                value: 10
            }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 210
    },

    {
        type: "nuclear_say",
        message0: "say %1",
        args0: [
            {
                type: "field_input",
                name: "MESSAGE",
                text: "Hello!"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        colour: 160
    }
];

export function registerNuclearBlocks(Blockly) {
    if (!Blockly?.Blocks) {
        throw new Error("Blockly is required.");
    }

    NUCLEAR_BLOCKS.forEach(block => {
        Blockly.Blocks[block.type] = {
            init() {
                this.jsonInit(block);
            }
        };
    });
}
import * as Blockly from "blockly";

export function configureNuclearRendering() {
    Blockly.setTheme(
        Blockly.Theme.defineTheme("nuclearModTheme", {
            base: Blockly.Themes.Classic,
            componentStyles: {
                workspaceBackgroundColour: "#ffffff",
                toolboxBackgroundColour: "#f4f4f4",
                flyoutBackgroundColour: "#ffffff",
                scrollbarColour: "#999999",
                insertionMarkerColour: "#000000"
            }
        })
    );
}

export function createNuclearWorkspace(container, toolbox) {
    if (!container) {
        throw new Error("Blocks container is required.");
    }

    configureNuclearRendering();

    return Blockly.inject(container, {
        toolbox,
        trashcan: true,
        renderer: "zelos",
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1,
            maxScale: 2,
            minScale: 0.5
        },
        move: {
            scrollbars: true,
            drag: true,
            wheel: true
        }
    });
}
import * as Blockly from "blockly";

import {
    registerNuclearBlocks
} from "./blocks";

import {
    createNuclearWorkspace
} from "./rendering";

export function initializeNuclearBlocks(container, toolbox) {
    registerNuclearBlocks(Blockly);

    return createNuclearWorkspace(
        container,
        toolbox
    );
}

export {
    registerNuclearBlocks,
    createNuclearWorkspace
};

export default Blockly;
import * as Blockly from "blockly";

/**
 * NuclearMod-specific Blockly modifications.
 */

export function applyNuclearModBlocklyMods() {
    // NuclearMod workspace settings.
    Blockly.NuclearMod = {
        version: 1,
        name: "NuclearMod"
    };

    // Allow NuclearMod to identify its own blocks.
    Blockly.NuclearMod.isNuclearBlock = block => {
        return Boolean(
            block &&
            typeof block.type === "string" &&
            block.type.startsWith("nuclear_")
        );
    };

    // Add a helper for finding NuclearMod blocks.
    Blockly.NuclearMod.getNuclearBlocks = workspace => {
        if (!workspace) {
            return [];
        }

        return workspace
            .getAllBlocks(false)
            .filter(Blockly.NuclearMod.isNuclearBlock);
    };
}

/**
 * Add NuclearMod-specific block behavior.
 */
export function registerNuclearBehavior() {
    Blockly.Blocks.nuclear_set_project_name = {
        init() {
            this.jsonInit({
                type: "nuclear_set_project_name",
                message0: "set project name to %1",
                args0: [
                    {
                        type: "field_input",
                        name: "NAME",
                        text: "My Nuclear Project"
                    }
                ],
                previousStatement: null,
                nextStatement: null,
                colour: 60,
                tooltip: "Sets the NuclearMod project name."
            });
        }
    };

    Blockly.Blocks.nuclear_project_info = {
        init() {
            this.jsonInit({
                type: "nuclear_project_info",
                message0: "NuclearMod version %1",
                args0: [
                    {
                        type: "field_label_serializable",
                        name: "VERSION",
                        text: "1"
                    }
                ],
                output: "String",
                colour: 60,
                tooltip: "Returns the NuclearMod project format version."
            });
        }
    };
}
import * as Blockly from "blockly";

import {
    registerNuclearBlocks
} from "./blocks";

import {
    createNuclearWorkspace
} from "./rendering";

import {
    applyNuclearModBlocklyMods,
    registerNuclearBehavior
} from "./mods";

export function initializeNuclearBlocks(container, toolbox) {
    applyNuclearModBlocklyMods();
    registerNuclearBehavior();
    registerNuclearBlocks(Blockly);

    return createNuclearWorkspace(
        container,
        toolbox
    );
}

export {
    registerNuclearBlocks,
    createNuclearWorkspace,
    applyNuclearModBlocklyMods,
    registerNuclearBehavior
};

export default Blockly;