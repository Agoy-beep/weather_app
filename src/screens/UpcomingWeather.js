/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native';
import ListItem from '../components/ListItem.js';


const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: "2023-02-18 15:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  },
  {
    dt_txt: "2023-02-18 17:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
  },
];

// part of the Flatlist props
// ListEmptyComponent
// ItemSeperatorComponent ={() => <View style{{backgroundColor: 'red', height: 100}} />}

const UpcomingWeather = () => {
  // eslint-disable-next-line react/display-name
  const renderItem = ({ item }) => (
    <ListItem 
      condition={item.weather[0].main} 
      dt_txt={item.dt_txt} 
      min={item.main.temp_min} 
      max={item.main.temp_max} 
    />
  )
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
     <ImageBackground 
      source={require('../../assets/upcoming-background.jpg')}
      style={image}
      >
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? 40 : 0,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex:1
  }
})

export default UpcomingWeather;