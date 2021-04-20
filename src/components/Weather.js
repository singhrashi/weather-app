import React from 'react';
import { Box, Card, CardBody, Image, Text } from 'grommet';

const Weather = ({ description, city, country, error, temp_min, temp_max, dt, icon }) => {

    const date = new Date(dt);
    return (
        <Box pad="small">
            <Card alignSelf="center" width="medium" direction="row-responsive">
                < CardBody alignContent="center" style={{color:'black'}}>
                    {city && country && <Text textAlign="center" style={{ fontWeight: 'bold' }}>{city}, {country}</Text>}
                    {icon &&
                        <Image style={{ alignSelf: 'center' }} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />}
                    {
                        dt && temp_max && temp_min && description &&
                        <Text textAlign="center">
                            {date.toLocaleDateString()} - {date.toLocaleTimeString()}<br />
                            {temp_min}&#176;C - {temp_max}&#176;C<br />
                            {description}
                        </Text>}

                </CardBody>
            </Card>
            {error && <Text>{error}</Text>}
        </Box >

    )
}

export default Weather;