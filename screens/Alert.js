import React from 'react';
import { Text, Alert } from 'react-native';


export default class popup extends React.Component {

        render ()
          {
        Alert.alert(
            'Shakira est gentille',
            'Je vais la piquer',
            [
              {text: "Je demande l'avis du public", onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Je me paluche',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: "Je la baise", onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
          return (<Text>Oh Sahkiraaaaaaa Sahkiraaaaaaa</Text>);
              }
    }