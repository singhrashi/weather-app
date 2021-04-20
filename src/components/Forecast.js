import { Box, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import { base_URL, version, API_KEY, units } from '../keys/keys';
import Weather from './Weather';
const Forecast = ({ city, country }) => {
    const [weathers, setForecast] = useState([]);
    useEffect(() => {
        const getForcastData = (city) => {
            fetch(`${base_URL}/${version}/forecast?q=${city}&APPID=${API_KEY}&units=${units}&cnt=5`)
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
                .then(json => setForecast(json.list))
                .catch(error => console.log(error))
        };
        getForcastData(city);
    }, [city])
    console.log(weathers)
    return (
        <Box pad="small">
            <Text alignSelf="center"
            style={{
                fontSize:'23px',
                fontWeight: 'bold',
                color: 'darkslateblue'
            }}>-------------------Next 5 hours Forecast-------------------</Text>
            <Box direction="row" pad="small">

                {
                    weathers.map((item, index) => {
                        return (<Weather
                            city={city}
                            country={country}
                            description={item.weather[0].description}
                            temp_min={item.main.temp_min}
                            temp_max={item.main.temp_max}
                            icon={item.weather[0].icon}
                            dt={item.dt * 1000}
                            error=''
                        />)
                    })
                }</Box>

        </Box>

    )
}

export default Forecast;