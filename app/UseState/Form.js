"use client";
import React, { useState } from "react";

export default function Form() {
  const [details, setDetails] = useState({ name: "", age: "", dob: "", gender: "" });
  const [submit, setSubmit] = useState("");

  const handleSubmit = () => {
    setSubmit(details);
    setDetails({ name: "", age: "", dob: "", gender: "" });
  };

  return (
    <div>
      <div>
        Form
        <div>
          Name :
          <input
            type="text"
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
          />
          Age :
          <input
            type="number"
            value={details.age}
            onChange={(e) => setDetails({ ...details, age: e.target.value })}
          />
          Date of Birth:
          <input
            type="date"
            value={details.dob}
            onChange={(e) => setDetails({ ...details, dob: e.target.value })}
          />
          Gender:
          <select
            id="gender"
            name="gender"
            onChange={(e) => setDetails({ ...details, gender: e.target.value })}
          >
            <option value="" disabled>
              Select a Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <p>Name:{submit.name}</p>
        <p>Age:{submit.age}</p>
        <p>dob:{submit.dob}</p>
        <p>Gender:{submit.gender}</p>
      </div>
    </div>
  );
}
