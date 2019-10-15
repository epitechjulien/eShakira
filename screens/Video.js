import React, { Component } from 'react';

import { StyleSheet, View, WebView, Platform, Text } from 'react-native';

export default class Video extends Component {

  render() {
    return (
        <View style={{ height: 300 }}>

            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/Ttfd51oDPCM' }}
                    />
        <Text>Shakira en approche..</Text>
        </View>

    );
  }
}

const styles = StyleSheet.create({

WebViewContainer: {

    marginTop: (Platform.OS == 'android') ? 20 : 0,

  }
  
});