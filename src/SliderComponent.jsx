import React from 'react';

function SliderComponent({ label, min, max, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span>{value}</span>
    </div>
  );
}

export default SliderComponent;