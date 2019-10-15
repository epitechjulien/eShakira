import React, { Component } from 'react';
import { WebView, View, StyleSheet, Button, Linking, AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

class Main extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    onNavigationStateChange={
      function (data) {
        console.log(data.url)
        // console.log(data.url.startsWith("https://"))
      if(!data.url.startsWith("https://")){
        // console.log(data.url)
        const access_token = data.url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
        // console.log('access : ' + access_token)
        const refresh_token = data.url.match(/\&(?:refresh_token)\=([\S\s]*?)\&/)[1];
        // console.log('refresh : ' + refresh_token)
    
        storeData = async () => {
          try {
            await AsyncStorage.setItem('access_token', access_token)
            await AsyncStorage.setItem('refresh_token', refresh_token)
            const toto = await AsyncStorage.getItem('access_token')
            const tata = await AsyncStorage.getItem('refresh_token')
            // console.log(toto + ' ' + tata);
            // if (!toto)
            // {console.log("toto n'exoste po")}
            // else{
            //   console.log('toto exoste')
            // }
            
          } catch (e) {
          }
          storeData()
        }
        // this.props.navigation.navigate('MyImage')
      }
    // utilise AsyncStorage afin de récupérer le token puis se connecte.
      }
  }
  console.log(toto + '' + tata)
}
render() {
  // const toto = AsyncStorage.getItem('access_token')
  // console.log(toto)
  // if(!AsyncStorage.getItem('access_token')){

    return (
      <WebView 
        source={{uri: 'https://api.imgur.com/oauth2/authorize?client_id=f29d1f4f2ccb80a&response_type=token'}}
          
        />
        )
      }
  // }
  // else{

  //   return (
  //     <View style={styles.container}>
  //     <Button
  //         title="Go to Details"
  //         onPress={() => this.props.navigation.navigate('Page')}
  //       />
  //       <Button
  //         title="Photos"
  //         onPress={() => this.props.navigation.navigate('MyImage')}
  //       />
  //     <Button title="Connexion/Inscription" onPress={ ()=>{ Linking.openURL('https://api.imgur.com/oauth2/authorize?client_id=f29d1f4f2ccb80a&response_type=token')}} />
  //     </View>
  //   );
  // }
}
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default Main