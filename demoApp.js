import React from "react";
import ReactDOM from"react-dom/client";

const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "firstChild" }, [React.createElement("h1", { id: "secondChild}" }, "Namaste React🚀 "), React.createElement("h2", { id: "secondChild" }, "I am an H2 tag")],[React.createElement("h1", { id: "secondChild}" }, "I am an H1 tag"), React.createElement("h2", { id: "secondChild" }, "I am an H2 tag")]))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);