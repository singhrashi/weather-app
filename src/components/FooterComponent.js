import React from "react";
import {Box, Text} from 'grommet';
const FooterComponent = () => (
    <Box style={{
        position: 'fixed',
        bottom: '0',
        width: '100%',
        background: 'rgb(235, 185, 64)'
    }}>
        <p style={{
            textAlign:'center'
        }}>Weather App created by Rashi</p>
    </Box>
);

export default FooterComponent;