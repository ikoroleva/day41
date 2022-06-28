import logo from './logo.svg';
import './App.css';
import weather from './weather.json';
import { Day } from './Day';
import { useState } from "react";
import { Detailed } from './Detailed';

function App() {

  const [selectedDay, setSelectedDay] = useState(weather[0].day);
  const [selectedDayDetail, setSelectedDayDetail] = useState(weather[0]);

  return (
    <div className='weather-info'>
      <div className="weather">
        {weather.map((dayData, i) => (
          <Day dayData={dayData} key={i} selectedDay={selectedDay} setSelectedDay={setSelectedDay} setSelectedDayDetail={setSelectedDayDetail} />

        ))}




      </div>
      <br />
      <br />
      <Detailed wind={selectedDayDetail.wind} humidity={selectedDayDetail.humidity} percipitation={selectedDayDetail.percipitation} />
    </div>
  );
}

export default App;
