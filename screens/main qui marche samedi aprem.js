import React, { Component } from 'react';
import { WebView, View, StyleSheet, Button, Linking, AsyncStorage, ImageBackground } from 'react-native';
import SoundPlayer from 'react-native-sound-player'
// import AsyncStorage from '@react-native-community/async-storage';

class Main extends React.Component {
render() {
    return (
      <WebView 
        source={{uri: 'https://api.imgur.com/oauth2/authorize?client_id=f29d1f4f2ccb80a&response_type=token'}}
        onNavigationStateChange={
          function (data) {
            // console.log(data.url)
            const access_token = data.url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
            // console.log('access : ' + access_token)
            const refresh_token = data.url.match(/\&(?:refresh_token)\=([\S\s]*?)\&/)[1];
            // console.log('refresh : ' + refresh_token)

            storeData = async () => {
              try {
                await AsyncStorage.setItem('access_token', access_token)
                await AsyncStorage.setItem('refresh_token', refresh_token)
                // const toto = await AsyncStorage.getItem('access_token')
                // const tata = await AsyncStorage.getItem('refresh_token')
                // console.log(toto + ' ' + tata);
              } catch (e) {
              }
            }
            storeData()
          }
        }
      />
    )
    // return (
    //   <ImageBackground source={'https://www.fg-a.com/wallpapers/white-background-stars.jpg'} style={{width: '100%', height: '100%'}}>
    //   <View style={styles.container}>
    //   <Button
    //       title="Go to Details"
    //       onPress={() => this.props.navigation.navigate('Page')}
    //     />
    //      <Button
    //       title="Album"
    //       onPress={() => this.props.navigation.navigate('MyAlbum')}
    //     />
    //     <Button
    //       title="Image"
    //       onPress={() => this.props.navigation.navigate('MyImage')}
    //     />
    //     {/* <Button
    //       title="Musique"
    //       onPress={() => this.props.navigation.navigate('Musique')}
    //     /> */}
    //   <Button title="Connexion/Inscription" onPress={ ()=>{ Linking.openURL('https://api.imgur.com/oauth2/authorize?client_id=f29d1f4f2ccb80a&response_type=token')}} />
    //   </View>
    // </ImageBackground>
    // );
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

export default Main