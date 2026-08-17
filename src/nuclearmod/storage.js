// src/nuclearmod/storage.js

import NuclearModStorage
    from "../../packages/scratch-storage/src/nuclearmod";

import vm from "./vm";

const storage = new NuclearModStorage();

vm.attachStorage(storage);

export default storage;