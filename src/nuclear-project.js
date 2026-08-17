// src/nuke-project.js

export const NUKE_EXTENSION = ".nuke";

export function exportNukeProject(vm) {
    const projectData = vm.toJSON();

    const wrappedProject = {
        format: "NuclearMod",
        fileExtension: ".nuke",
        version: 1,
        project: JSON.parse(projectData)
    };

    return new Blob(
        [JSON.stringify(wrappedProject, null, 2)],
        { type: "application/json" }
    );
}

export async function importNukeProject(vm, file) {
    const text = await file.text();
    const data = JSON.parse(text);

    if (
        data.format !== "NuclearMod" ||
        data.fileExtension !== ".nuke" ||
        !data.project
    ) {
        throw new Error("Invalid NuclearMod .nuke project.");
    }

    await vm.loadProject(
        JSON.stringify(data.project)
    );
}

export function downloadNukeProject(vm, filename = "MyProject.nuke") {
    const blob = exportNukeProject(vm);
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename.endsWith(".nuke")
        ? filename
        : `${filename}.nuke`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
}