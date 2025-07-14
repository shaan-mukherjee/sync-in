// src/Interests.jsx
import React, { useState } from "react";

const INTEREST_TAGS = [
  "tech", "workshops", "cultural", "hackathon",
  "art", "entrepreneurship", "sports", "music"
];

export default function Interests({ onSelect }) {
  const [selected, setSelected] = useState([]);

  const toggleInterest = (tag) => {
    setSelected(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    onSelect(selected);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Select Your Interests</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {INTEREST_TAGS.map(tag => (
          <button
            key={tag}
            onClick={() => toggleInterest(tag)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: selected.includes(tag) ? "#2196f3" : "#e0e0e0",
              color: selected.includes(tag) ? "white" : "black",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer"
            }}
          >
            {tag}
          </button>
        ))}
      </div>
      <br />
      <button onClick={handleSubmit}>Get Recommendations</button>
    </div>
  );
}
