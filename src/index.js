import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    return (
        <div>
            <h1>NuclearMod</h1>
            <p>Loading...</p>
        </div>
    );
};

const rootElement = document.getElementById("root");

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
}