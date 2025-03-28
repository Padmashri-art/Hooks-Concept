"use client";
import React, { useEffect, useState } from "react";

export default function Listing() {
  const [user, setUser] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) {
      const users = [
        { id: 1, name: "Ja", color: "pink" },
        { id: 2, name: "sangeetha", color: "red" },
        { id: 3, name: "shri", color: "blue" },
      ];
      setUser(users);
    }
  }, [load]);

  const display = () => {
    setLoad(true);
  };
  return (
    <div>
      Listing
      <div>
        <button className="button" onClick={display}>
          Click to view the list
        </button>
      </div>
      {load && user.length > 0
        ? user.map((users) => (
            <div key={users.id}>
              <li>
                {users.name} - {users.color}
              </li>
            </div>
          ))
        : ""}
    </div>
  );
}
