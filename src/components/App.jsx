// I add nothing to it
import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  // const [mouseOver, setmouseOver] = useState("Hello");

  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    // console.log("Clicked");
    setHeadingText("Submitted");
  }
  // var color = backgroundColor: "black";

  function handlMouseOver() {
    // backgroundColor: "blue"
    // console.log("Moused Over")
    setMouseOver(true);
  }

  function handlMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      {/* <h1>Hello</h1> */}
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      {/* <button style = {{backgroundColor: "black"}} onClick={handleClick}>Submit</button> */}

      <button
        style={{ backgroundColor: isMouseOver ? "yellow" : "red" }}
        onClick={handleClick}
        onMouseOver={handlMouseOver}
        onMouseOut={handlMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
