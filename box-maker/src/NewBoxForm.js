import React, { useState } from "react";


const NewBoxForm = ({ addBox }) => {
  const [width, setWidth] = useState("100");
  const [height, setHeight] = useState("100");
  const [backgroundColor, setBackgroundColor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox({ id: Date.now(), width: Number(width), height: Number(height), backgroundColor });
    setWidth("");
    setHeight("");
    setBackgroundColor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input type="number" id="width" value={width} onChange={(e) => setWidth(e.target.value)} />

      <label htmlFor="height">Height:</label>
      <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />

      <label htmlFor="backgroundColor">Background Color:</label>
      <input type="text" id="backgroundColor" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />

      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;