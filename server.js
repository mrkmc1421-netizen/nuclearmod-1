const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const projects = [
    {
        id: "1",
        title: "Nuclear Starter",
        description: "A community project made with NuclearMod.",
        thumbnail: "/thumbnails/nuclear-starter.png"
    },
    {
        id: "2",
        title: "Space Adventure",
        description: "Explore the galaxy.",
        thumbnail: "/thumbnails/space-adventure.png"
    }
];

app.get("/api/projects", (req, res) => {
    res.json({
        projects
    });
});

app.get("/api/projects/:id", (req, res) => {
    const project = projects.find(
        project => project.id === req.params.id
    );

    if (!project) {
        return res.status(404).json({
            error: "Project not found"
        });
    }

    res.json(project);
});

app.use(express.static(path.join(__dirname, "build")));

app.listen(PORT, () => {
    console.log(`NuclearMod server running on port ${PORT}`);
});