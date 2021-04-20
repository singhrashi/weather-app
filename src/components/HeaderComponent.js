import React, { useState } from 'react';
import {
    Header, Button, Form,
    TextInput, Text, Box
} from 'grommet';
import { Search, FormRefresh } from 'grommet-icons';

const defaultValue = {
    city: ''
};
function HeaderComponent(props) {
    const [value, setValue] = useState(defaultValue);
    return (
        <Box>
            <Header background="dark-1" pad="medium">
                <Text style={{
                    color: 'cyan',
                    fontWeight: 'bold',
                    fontSize: '30px'
                }}>Check Weather</Text>
                <Form value={value}
                    onChange={(nextValue) => {
                        setValue(nextValue);
                    }}
                    onReset={() => setValue(defaultValue)}
                    onSubmit={props.getWeather}>
                    <Box direction="row">
                        <TextInput name="city" placeholder="Enter city"
                            style={{
                                border: 'none',
                                outline: 'none',
                                borderBottom: '1px solid gray'
                            }}
                            id="city" />
                        <Button type="submit" icon={<Search />} />
                        <Button type="submit" icon={<FormRefresh />} />
                    </Box>
                </Form>
            </Header>
        </Box>

    )
}


export default HeaderComponent;