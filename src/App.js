import React,{ useState} from 'react';

const App = () => {

  const [temperatureValue,setTemeratureValue]=useState(10);
  const [temperatureColor,setTemeratureColor]=useState('hot')
 
 
  const increaseTemp = () =>{
    const newTemp = temperatureValue +1;
    setTemeratureValue(newTemp);

    if(newTemp>=15){
      setTemeratureColor('hot');
    }
    setTemeratureValue(newTemp);

  };
  const decreaseTemp = () =>{
    const newTemp = temperatureValue -1;
    setTemeratureValue(newTemp);

    if(newTemp<15){
      setTemeratureColor('cold');
    }
    setTemeratureValue(newTemp);

  };


  return(
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={'temperature-display ${temperatureColor}'}> {temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemp()}>+</button>
        <button onClick={() => decreaseTemp()}>-</button>
      </div>
    </div>
  )
}

export default App; 