import React from "react";
import "../css/UnitToggle.css"
const UnitToggle = ({ unit, onUnitToggle }) => {
  return (
    <div className="toggle-conatiner">
        <input
          type="checkbox"
          checked={unit === "imperial"}
          onChange={onUnitToggle}
        />
        <span style={{color:"wheat"}}>Units (Fahrenheit / Celsius)</span>
        
      
    </div>
  );
};

export default UnitToggle;
