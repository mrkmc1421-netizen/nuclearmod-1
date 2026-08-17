const STORAGE_KEY = "nuclearmod-addons";

const defaultAddons = {
    "nuclear-blocks": true,
    "nuke-tools": true,
    "community-projects": true,
    "advanced-editor": false,

    "gamepad": false,
    "box2d": false,
    "local-storage": false,
    "text": false
};

export function getAddons() {
    try {
        return {
            ...defaultAddons,
            ...JSON.parse(
                localStorage.getItem(STORAGE_KEY) || "{}"
            )
        };
    } catch {
        return { ...defaultAddons };
    }
}

export function setAddon(id, enabled) {
    const addons = getAddons();

    addons[id] = Boolean(enabled);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(addons)
    );

    window.dispatchEvent(
        new CustomEvent("nuclearmod-addon-change", {
            detail: {
                id,
                enabled: Boolean(enabled)
            }
        })
    );
}

export function isAddonEnabled(id) {
    return getAddons()[id] === true;
}