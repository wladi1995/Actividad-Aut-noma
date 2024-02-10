import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import { Button } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} options={{title:'HOME'}}/>
        <Stack.Screen name="Screen2"  component={Screen2} options={{title:'FORMULARIO'}} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
};

export default App;
