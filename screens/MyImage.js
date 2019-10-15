import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';

class MyImage extends React.Component {

  constructor(props) {
    super(props)
    this.state = { imageLink: null }
  }

  componentDidMount() {
    var Photo = 'xdpkx9k';
      fetch('https://api.imgur.com/3/image/' + Photo, {
        method: 'GET',
        headers: {
          Authorization: 'Client-ID f29d1f4f2ccb80a',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        return response.json()
      }).then((responseJson) => {
        // console.log(responseJson);
        this.setState({ imageLink: responseJson.data.link })
      })
      
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    if (this.state.imageLink == null)
    return (
      <Text>Loading...</Text>
    )
    else
    return (
      <Image source={{uri: this.state.imageLink}} style={{width: 400, height: 400}} />
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

export default MyImage