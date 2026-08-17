import NuclearModRenderer from "./index";

export function createNuclearModStage(canvas) {
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw new TypeError("NuclearMod requires an HTML canvas.");
    }

    const renderer = new NuclearModRenderer(canvas);

    // Scratch's logical stage coordinates.
    renderer.setStageSize(
        -240,
        240,
        -180,
        180
    );

    renderer.setBackgroundColor(
        1,
        1,
        1
    );

    renderer.resize(
        canvas.clientWidth || 480,
        canvas.clientHeight || 360
    );

    let animationFrame = null;

    const draw = () => {
        renderer.draw();
        animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return {
        renderer,

        stop() {
            if (animationFrame !== null) {
                cancelAnimationFrame(animationFrame);
                animationFrame = null;
            }
        },

        resize(width, height) {
            renderer.resize(width, height);
        }
    };
}