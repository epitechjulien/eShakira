import React, { Component } from 'react';
import App from './screens/Main';
import Search from './screens/Search';
import MyImage from './screens/MyImage';
import MyAlbum from './screens/MyAlbum';
import popup from './screens/Alert';
import Video from './screens/Video';
import Maps from './screens/Maps';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AssetExample from './components/AssetExample';

const AppNavigator = createStackNavigator(
  {
    Home: App,
    Page: Search,
    MyImage: MyImage,
    MyAlbum: MyAlbum,
    popup: popup,
    Video: Video,
    Maps: Maps,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);



// import React, { Component } from 'react';
// import { View, StyleSheet, Button, Linking, Text } from 'react-native';
// import { Constants } from 'expo';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>John l'espion est de retour</Text>

//     </View>
//   );
// }

// const login = function ()
// {
//   componentDidMount() {
//     Linking.getInitialURL().then((url) => {
//       if (url) {
//         console.log('Initial url is: ' + url);
//       }
//     }).catch(err => console.error('An error occurred', err));
//   }
// fetch('https://api.imgur.com/3/gallery/image/P8szAzJ', {
//   method: 'POST',
//   body: JSON.stringify({
//   }),
// });
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });