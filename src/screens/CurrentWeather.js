import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CurrentWeather = () => {
  
  const { wrapper, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles
  return (
      <View style={wrapper}>
        <Feather name='sun' size={100} color='black' />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText 
          messageOne={'High: 8'} 
          messageTwo={'Low: 6'} 
          containerStyles={highLowWrapper} 
          messageOneStyles={highLow} 
          messageTwoStyles={highLow}
          />
          <RowText 
          messageOne={'It\'s sunny'} 
          messageTwo={'It\'s perfect t-shirt weather'} 
          containerStyles={bodyWrapper} 
          messageOneStyles={description} 
          messageTwoStyles={message}
          />
      </View>  
  )
};

// const insets = useSafeAreaInsets()

const styles = StyleSheet.create({

  wrapper: {
    backgroundColor:'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingTop: insets.top,
    // paddingBottom: insets.bottom,
    // paddingLeft: insets.left,
    // paddingRight: insets.right,
  },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 40
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
  
})
export default CurrentWeather; 