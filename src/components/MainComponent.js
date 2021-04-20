import { Box, Text } from 'grommet';
import { useEffect, useState } from 'react';
import Weather from './Weather';
import Forecast from './Forecast';
import HeaderComponent from './HeaderComponent';
import { API_KEY, base_URL, units, version } from '../keys/keys';
import FooterComponent from './FooterComponent';

function MainComponent() {
  const [weather, setWeather] = useState([])
  useEffect(()=>{
    fetchWeatherData("Delhi");
  },[])
  async function fetchData(e) {
    e.preventDefault()
    const city = e.target.elements.city.value
    await fetchWeatherData(city);
  } 
  async function fetchWeatherData(city) {
    
    const apiData = await fetch(`${base_URL}/${version}/weather?q=${city}&APPID=${API_KEY}&units=${units}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var error = new Error('Error ' + response.status + ':' + response.statusText);
          error.response = response;
          throw error;
        }
      },
        error => {
          var errmess = new Error(error.message);
          throw errmess;
        })
      .then(data => data)
      .catch(error => console.log(error))
    if (city) {
      setWeather({
        data: apiData,
        city: city,
        icon: apiData.weather[0].icon,
        dt: apiData.dt * 1000,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        minTemp: apiData.main.temp_min,
        maxTemp: apiData.main.temp_max,
        error: ""
      })
    } else {
      setWeather({
        data: '',
        city: '',
        icon: '',
        country: '',
        dt: '',
        description: '',
        minTemp: '',
        maxTemp: '',
        error: 'Please Type City'
      })
    }
  }
  
  return (
    <>

      <Box alignContent="center">
        <HeaderComponent getWeather={fetchData} />
        {
          weather.city ?
            <>
              <Box>
                <Weather
                  data={weather.data}
                  city={weather.city}
                  country={weather.country}
                  description={weather.description}
                  temp_min={weather.minTemp}
                  temp_max={weather.maxTemp}
                  icon={weather.icon}
                  dt={weather.dt}
                  error={weather.error}
                />
              </Box>
              <Box>
                <Forecast city={weather.city} country={weather.country}/>
              </Box>
            </> : ""
        }
        <FooterComponent />
      </Box>

    </>

  );
}

export default MainComponent;
