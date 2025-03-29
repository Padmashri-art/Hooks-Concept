"use client";
import React, { useEffect, useRef, useState } from "react";

export default function ListItems() {
  const [item, setItem] = useState([]);
  const [input, setInput] = useState("");
  const refinput = useRef(null);
  useEffect(() => {
    refinput.current = item[item.length - 1];
  });

  const addItem = () => {
    setItem([...item, input]);
    setInput("");
  };

  return (
    <div>
      <div>Listing</div>
      <div>
        Enter Item: <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addItem}>Add Item</button>
        <b>Previous Item:{refinput.current}</b>
      </div>
      <ul>
        {item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
