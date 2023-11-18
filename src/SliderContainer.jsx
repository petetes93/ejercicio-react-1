import React from 'react';
import SliderComponent from './SliderComponent'; 

function SliderContainer({ slider1Value, slider2Value, onSlider1Change, onSlider2Change }) {
  return (
    <div>
      <h2>Configuración del Crédito</h2>
      <SliderComponent
        label="Monto Total"
        min={5000}
        max={50000}
        value={slider1Value}
        onChange={onSlider1Change}
      />
      <SliderComponent
        label="Plazo"
        min={3}
        max={24}
        value={slider2Value}
        onChange={onSlider2Change}
      />
    </div>
  );
}

export default SliderContainer;