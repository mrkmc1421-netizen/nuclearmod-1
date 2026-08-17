import RenderWebGL from "./RenderWebGL";

/**
 * NuclearMod Scratch Renderer
 *
 * Entry point for the Scratch 3 rendering engine.
 * The renderer draws sprites, backdrops, and clones
 * onto the stage using WebGL.
 */

class NuclearModRenderer extends RenderWebGL {
    constructor(canvas) {
        super(canvas);

        this.nuclearMod = {
            name: "NuclearMod",
            version: 1,
            renderer: "WebGL"
        };
    }

    getNuclearModInfo() {
        return {
            name: this.nuclearMod.name,
            version: this.nuclearMod.version,
            renderer: this.nuclearMod.renderer
        };
    }
}

export default NuclearModRenderer;