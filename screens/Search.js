import React from 'react';
import { View, StyleSheet, TextInput, Button, ImageBackground } from 'react-native';

class Search extends React.Component {
render() {
    return (
      <ImageBackground style={styles.container} source={require('../assets/shakirette.gif')}>
        <TextInput placeholder="Recherche"/>
       <Button title="Recherche" onPress={ ()=> {}}/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default Search