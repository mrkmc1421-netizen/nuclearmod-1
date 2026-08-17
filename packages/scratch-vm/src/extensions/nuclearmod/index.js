class NuclearModExtension {
    constructor(runtime) {
        this.runtime = runtime;

        this.state = {
            nuclearPower: 100,
            radiation: 0,
            explosionEffect: 0,
            projectTitle: "Title goes here"
        };
    }

    getInfo() {
        return {
            id: "nuclearmod",
            name: "NuclearMod",
            color1: "#FF7A00",
            color2: "#E66500",
            color3: "#CC5500",

            blocks: [
                {
                    opcode: "setPower",
                    blockType: "command",
                    text: "set Nuclear Power to [VALUE]",
                    arguments: {
                        VALUE: {
                            type: "number",
                            defaultValue: 100
                        }
                    }
                },
                {
                    opcode: "changePower",
                    blockType: "command",
                    text: "change Nuclear Power by [VALUE]",
                    arguments: {
                        VALUE: {
                            type: "number",
                            defaultValue: 10
                        }
                    }
                },
                {
                    opcode: "getPower",
                    blockType: "reporter",
                    text: "Nuclear Power"
                },
                {
                    opcode: "setRadiation",
                    blockType: "command",
                    text: "set radiation level to [VALUE]",
                    arguments: {
                        VALUE: {
                            type: "number",
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: "changeRadiation",
                    blockType: "command",
                    text: "change radiation level by [VALUE]",
                    arguments: {
                        VALUE: {
                            type: "number",
                            defaultValue: 5
                        }
                    }
                },
                {
                    opcode: "getRadiation",
                    blockType: "reporter",
                    text: "radiation level"
                },
                {
                    opcode: "activateNuclearMode",
                    blockType: "command",
                    text: "activate Nuclear Mode"
                },
                {
                    opcode: "deactivateNuclearMode",
                    blockType: "command",
                    text: "deactivate Nuclear Mode"
                },
                {
                    opcode: "setProjectTitle",
                    blockType: "command",
                    text: "set project title to [TITLE]",
                    arguments: {
                        TITLE: {
                            type: "string",
                            defaultValue: "My Project"
                        }
                    }
                },
                {
                    opcode: "getProjectTitle",
                    blockType: "reporter",
                    text: "project title"
                },
                {
                    opcode: "nuclearVersion",
                    blockType: "reporter",
                    text: "NuclearMod version"
                }
            ]
        };
    }

    setPower(args) {
        this.state.nuclearPower = Number(args.VALUE) || 0;
    }

    changePower(args) {
        this.state.nuclearPower += Number(args.VALUE) || 0;
    }

    getPower() {
        return this.state.nuclearPower;
    }

    setRadiation(args) {
        this.state.radiation = Number(args.VALUE) || 0;
    }

    changeRadiation(args) {
        this.state.radiation += Number(args.VALUE) || 0;
    }

    getRadiation() {
        return this.state.radiation;
    }

    activateNuclearMode() {
        this.state.nuclearMode = true;
    }

    deactivateNuclearMode() {
        this.state.nuclearMode = false;
    }

    setProjectTitle(args) {
        this.state.projectTitle = String(args.TITLE);
    }

    getProjectTitle() {
        return this.state.projectTitle;
    }

    nuclearVersion() {
        return "1.0.0";
    }
}

export default NuclearModExtension;