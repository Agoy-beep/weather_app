import React from 'react';
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';

const City = () => {
  const { container, imageLayout, countryName, cityName, 
    cityText, populationWrapper, populationText, riseSetWrapper, riseSetText } = styles;
  return (
      <ImageBackground source={require('../../assets/city-picture.jpg')} style={imageLayout}>
        <Text style={[cityName, cityText]}>Prague</Text>
        <Text style={[countryName, cityText]}>Czech Republic</Text>
        <View style={populationWrapper}>
          <IconText iconName={'user'} iconSize={50} iconColor={'red'} iconText={'8000'} bodyTextStyles={populationText}/>
        </View>
        <View style={riseSetWrapper}>
          <IconText iconName={'sunrise'} iconSize={50} iconColor={'white'} iconText={'10:46:58'} bodyTextStyles={riseSetText}/>
          <IconText iconName={'sunset'} iconSize={50} iconColor={'white'} iconText={'17:28:15'} bodyTextStyles={riseSetText}/>
        </View>
      </ImageBackground>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1
  },
  countryName: {
    fontSize: 30,
  },
  cityName: {
    fontSize: 40,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  }
})

export default City; 