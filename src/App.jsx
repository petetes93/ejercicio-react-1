// App.jsx
import React, { useState } from 'react';
import SliderContainer from './SliderContainer';
import './assets/styles.css'; 

function App() {
  const [slider1Value, setSlider1Value] = useState(5000);
  const [slider2Value, setSlider2Value] = useState(3);
  const [cuotaFijaPorMes, setCuotaFijaPorMes] = useState(calculateCuotaFijaPorMes(5000, 3)); // Calcula la cuota inicial

  const handleSlider1Change = (value) => {
    setSlider1Value(value);
    setCuotaFijaPorMes(calculateCuotaFijaPorMes(value, slider2Value));
  };

  const handleSlider2Change = (value) => {
    setSlider2Value(value);
    setCuotaFijaPorMes(calculateCuotaFijaPorMes(slider1Value, value));
  };

  
  function calculateCuotaFijaPorMes(montoTotal, plazo) {
    return plazo !== 0 ? montoTotal / plazo : 0;
  }

  return (
    <div>
      <h1>Simulá tu crédito</h1>
      <SliderContainer
        slider1Value={slider1Value}
        slider2Value={slider2Value}
        onSlider1Change={handleSlider1Change}
        onSlider2Change={handleSlider2Change}
      />
      <div>
        <h2>Cuota Fija por Mes</h2>
        <p>Monto Total: ${slider1Value}</p>
        <p>Plazo: {slider2Value} meses</p>
        <p>Cuota Fija por Mes: ${cuotaFijaPorMes.toFixed(2)}</p>
        {}
      </div>
    </div>
  );
}

export default App;
