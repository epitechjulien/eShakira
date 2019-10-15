import React, { Component } from 'react';
import { WebView, View, StyleSheet, Button, AsyncStorage, Text, StatusBar, ImageBackground, ProgressBarAndroid } from 'react-native';

export default class App extends Component
{
  state = {
    token: undefined,
  };
  async componentDidMount() {
    // utilise AsyncStorage afin de récupérer le token puis se connecte.
      try {
        const toto = await AsyncStorage.getItem('access_token')
        // const tata = await AsyncStorage.getItem('refresh_token')
        // console.log('ici componentdidmount : ' + toto + ' ' + tata)
        this._connect(toto)
      } catch (e) {
      }

  }

  _connect(toto) {
    // console.log('ligne 21 : ' + toto)
    this.setState({ token: toto });
  }

  OnPageChange(data) {
    let match = data.url.match(/\#(?:access_token)\=([\S\s]*?)\&/);
      // console.log(data.url);
      // console.log('ligne 31 ' + match);
      if (match && match[1])
      {
        // Ici on récupere la valeur de data.link et on prend que l'access_token et refresh_token
        const access_token = match[1];
        const refresh_token = data.url.match(/\&(?:refresh_token)\=([\S\s]*?)\&/)[1];
        this.storeData.bind(this)(access_token, refresh_token);
        // console.log(data);
        // console.log('data url ' + data.url);
        // console.log('ici function data onNavigationStateChange')
        // console.log('access : ' + access_token + ' refresh : ' + refresh_token)
      }
  }

  async storeData(access_token, refresh_token) {
    try {
      // Ici on insère (SET) l'access et refresh dans asynch puis on le test (console.log du GET)
      await AsyncStorage.setItem('access_token', access_token)
      await AsyncStorage.setItem('refresh_token', refresh_token)
      const toto = await AsyncStorage.getItem('access_token')
      const tata = await AsyncStorage.getItem('refresh_token')
      this._connect(tata)
      // console.log('ligne 51 ' + toto + ' ' + tata);
      // console.log('ligne 53 ' + toto + ' ' + tata);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    switch (this.state.token) {
      case undefined: // La premiere fois, le token est defini à undefined, on charge l'activité.
      // console.log('ici switch case undefined ' + this.state.token);
      return (
          <View>
            <Text>Chargement..</Text>
          </View>
        );
      case null: // Si null, cela signifie que AsyncStorage n'a pas trouvé le token
      return (
        <WebView 
          source={{uri: 'https://api.imgur.com/oauth2/authorize?client_id=f29d1f4f2ccb80a&response_type=token'}}
          onNavigationStateChange={this.OnPageChange.bind(this)}
        />
      )
      default: // Sinon, On a un token, on affiche notre activité.
      // console.log(this.state.token);
        return (
          // style={{width: '100%', height: '100%'}}
          <ImageBackground style={styles.container} source={require('../assets/shakira3.png')}>
            <ProgressBarAndroid />
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.5}
            />
            <Button
                title="Barre de recherche"
                onPress={() => this.props.navigation.navigate('Page')}
                />
              <Button
                title="Album"
                onPress={() => this.props.navigation.navigate('MyAlbum')}
                />
              <Button
                title="Image"
                onPress={() => this.props.navigation.navigate('MyImage')}
              />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                <Button
                title="Video"
                onPress={() => this.props.navigation.navigate('Video')}
                />
                <Button
                title="Alert"
                onPress={() => this.props.navigation.navigate('popup')}
                />
                <Button
                title="Carte"
                onPress={() => this.props.navigation.navigate('Maps')}
                />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
          </ImageBackground>
        );
    }
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