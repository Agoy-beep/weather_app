import React from 'react';
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';
import City from './src/screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <SafeAreaProvider>
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name={'Current'} component={CurrentWeather}/>
        <Tab.Screen name={'Upcoming'} component={UpcomingWeather} />
        <Tab.Screen name={'City'} component={City} />
    </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;