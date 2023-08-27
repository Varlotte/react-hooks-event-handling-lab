import React from "react";

function Keypad() {
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="password"
      />
    </div>
  );
}

export default Keypad;
