import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

//React Element : an object ==> after Render(HTML)
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const heading = <h3 id="heading">Namaste React🚀 from jsxHeading</h3>;
const title = <h3 id="heading">I am Element heading</h3>;

//React Component
//Component Composistion
//Title: component ithout return {}
const Title = () => (
  <h2 className="head" tabIndex={5}>
    {heading}
    Namaste React🚀 from Title
  </h2>
);

//component with return{}
const HeadingComponent = () => {
  return (
    <>
      <div id="container-1">
        {title}
        <Title></Title>
        <h3 className="heading">Namaste React🚀functional component-1</h3>
      </div>
      <div id="container-2">
        <Title />
        {Title()}
        <h3 className="heading">Namaste React🚀functional component-2</h3>
      </div>
    </>
  );
};

//element
const ele = (
  <h1>
    Rendering componenet from element
    <div>
      <HeadingComponent />
    </div>
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);
