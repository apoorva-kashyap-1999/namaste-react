
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "firstChild" }, [React.createElement("h1", { id: "secondChild" }, "I am an H1 tag"), React.createElement("h2", { id: "secondChild" }, "I am an H2 tag")]))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);