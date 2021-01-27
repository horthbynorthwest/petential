import React, { useState } from 'react';
const api = {
  key: "6ea521e50cfe7612e4494d54cddb44b9",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
    }
  }

  // const dateBuilder = (d) => {
  //   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  //   let day = days[d.getDay()];
  //   let date = d.getDate();
  //   let month = months[d.getMonth()];
  //   let year = d.getFullYear();

  //   return `${day} ${date} ${month} ${year}`
  // }

  return (
    <div>
      <main>
        <h5>Get today's weather to plan your walk!</h5>
        <br />
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Enter Your City!"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <br />
        {(typeof weather.main != "undefined") ? (
        <div>
          <h5>
              Today in {weather.name}, {weather.sys.country} it is {Math.round(weather.main.temp)}°c
                with {weather.weather[0].description}
          </h5>
        </div>
        ) : ('')}
        <br />
        <br />
        <br />
        <br />
      </main>
    </div>
  );
}

export default Weather;
