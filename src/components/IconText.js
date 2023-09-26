import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
  const { iconName, iconSize, iconColor, iconText, bodyTextStyles } = props;
  const { container, textTheme } = styles;
  return(
    <View style={container}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={[bodyTextStyles, textTheme]}>{iconText}</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {

  },
  textTheme: {
    fontWeight: 'bold'
  }
});

export default IconText;