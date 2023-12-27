import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello namaste react using react element"
);

// JSX-> HTML - like or XML-like syntax 
const jsxHeading = <h1 id="heading"
>Namaste React using JSX</h1>
const Title = ()=>(
    <h1>Title</h1>
)
 
const data =1000;

const HeadingComponent = ()=> (
        <div>
            {data}
            {/* Rendering React element inside component   */}
            {jsxHeading}
            {Title()}
            <Title></Title>
        <Title />
        <h1 className="heading">Namaste React 
    Functional Component </h1>
    </div>    
    )

//   
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading); 
// rendering an component
root.render(<HeadingComponent />)