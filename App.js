import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'pink',
    flex: 1
  },
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 0
  }
})
export default App; 