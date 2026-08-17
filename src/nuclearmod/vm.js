// src/nuclearmod/vm.js

import VirtualMachine from "@scratch/scratch-vm";
import NuclearModExtension from
    "../../packages/scratch-vm/src/extensions/nuclearmod";

const vm = new VirtualMachine();

const nuclearExtension =
    new NuclearModExtension(vm.runtime);

vm.extensionManager._registerInternalExtension(
    "nuclearmod",
    nuclearExtension
);

export default vm;