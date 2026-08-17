import PaintEditor from "../index";

/**
 * NuclearMod Paint integration.
 *
 * Uses Scratch Paint as the underlying costume/backdrop editor
 * while providing NuclearMod-specific metadata.
 */
class NuclearModPaintEditor extends PaintEditor {
    constructor(options = {}) {
        super(options);

        this.nuclearMod = {
            name: "NuclearMod",
            version: 1,
            supportedFormats: [
                "svg",
                "png"
            ]
        };
    }

    getNuclearModInfo() {
        return {
            name: this.nuclearMod.name,
            version: this.nuclearMod.version,
            supportedFormats: [
                ...this.nuclearMod.supportedFormats
            ]
        };
    }

    isSupportedFormat(format) {
        return this.nuclearMod.supportedFormats.includes(
            String(format).toLowerCase()
        );
    }
}

export default NuclearModPaintEditor;
import NuclearModPaintEditor
    from "./nuclearmod/index";

export default NuclearModPaintEditor;