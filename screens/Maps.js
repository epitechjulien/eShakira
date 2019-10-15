import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Maps extends React.Component {
render() {
    return (
      <View style={styles.container}>
		  <Text>Test</Text>
	  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	justifyContent: 'flex-end',
	alignItems: 'center'
  },
  map: {
	position: 'absolute',
	top: 0,
	left: 0,
	bottom: 0,
	right: 0 
  }
});