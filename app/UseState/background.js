"use client";
import React, { useState } from "react";

export default function background() {
  const [background, setBackground] = useState("white");
  const [color, setColor] = useState("black");
  const [background1, setBackground1] = useState("red");
  const [color1, setColor1] = useState("yellow");

  const handleColorChange = () => {
    setBackground(background === "white" ? "blue" : "white");
    setBackground1(background1 === "red" ? "yellow" : "red");
    setColor(color === "black" ? "white" : "black");
    setColor1(color1 === "yellow" ? "red" : "yellow");
  };
  return (
    <div>
      Background and TextColor Change
      <div style={{ background: background, color: color, width: "200px", height: "100px" }}>
        <p>Background Color:{background}</p> <p>Text Color:{color}</p>
      </div>
      <div style={{ background: background1, color: color1, width: "200px", height: "100px" }}>
        <p> Background Color: {background1}</p>
        <p>Text Color:{color1}</p>
      </div>
      <button onClick={handleColorChange}>Change Color</button>
    </div>
  );
}
