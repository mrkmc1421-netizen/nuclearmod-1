{
  "name": "nuclearmod",
  "version": "1.0.0",
  "private": false,
  "description": "NuclearMod, a Scratch 3-based editor",
  "license": "AGPL-3.0-only",
  "workspaces": [
    "packages/scratch-gui",
    "packages/scratch-vm",
    "packages/scratch-render",
    "packages/scratch-paint",
    "packages/scratch-storage",
    "packages/scratch-svg-renderer"
  ],
  "scripts": {
    "start": "npm --workspace @scratch/scratch-gui start",
    "build": "npm run --workspaces build",
    "test": "npm test --workspaces",
    "clean": "npm run --workspaces clean"
  },
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "cross-env": "^7.0.3"
  }
}