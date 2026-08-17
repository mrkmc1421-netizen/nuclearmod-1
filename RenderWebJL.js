import RenderWebGL from "@scratch/scratch-render/RenderWebGL";

/**
 * NuclearMod renderer integration.
 *
 * The underlying Scratch WebGL renderer remains responsible
 * for the actual rendering engine.
 */
class NuclearModRenderWebGL extends RenderWebGL {
    constructor(canvas) {
        super(canvas);

        this.nuclearMod = {
            name: "NuclearMod",
            version: 1
        };
    }

    getNuclearModInfo() {
        return {
            name: this.nuclearMod.name,
            version: this.nuclearMod.version
        };
    }

    startRenderLoop() {
        const render = () => {
            this.draw();
            this._renderFrame = requestAnimationFrame(render);
        };

        render();
    }

    stopRenderLoop() {
        if (this._renderFrame) {
            cancelAnimationFrame(this._renderFrame);
            this._renderFrame = null;
        }
    }
}

export default NuclearModRenderWebGL;