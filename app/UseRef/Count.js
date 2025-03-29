"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const refcount = useRef(null);

  useEffect(() => {
    refcount.current = count;
  }, [count]);

  return (
    <div>
      <div>Count: {count}</div>
      <div>RefCount:{refcount.current}</div>
      <button className="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
