import React from 'react';
import { StyleSheet, Image, Text, ScrollView } from 'react-native';

class MyAlbum extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { imageLink: [] }
  }
  
  componentDidMount() {
    
    // const imageNumber = 'xdpkx9k'
    const clientID = 'f29d1f4f2ccb80a'
    
      fetch('https://api.imgur.com/3/album/MkP2kI4', {
      // fetch('https://api.imgur.com/3/image/' + imageNumber, {
        method: 'GET',
        headers: {
          Authorization: 'Client-ID ' + clientID,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        return response.json()
      }).then((responseJson) => {
        var imageLinks = this.state.imageLink;
        responseJson.data.images.forEach(element => {
          console.log('link : '+ element.link)
          imageLinks.push(element.link);
        });
        
        console.log(imageLinks)
        this.setState({ imageLinks })
        console.log(this.state.imageLink)
        // console.log(responseJson.data.images)
       

      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    if (this.state.imageLink.length == 0)
    return (
      <Text>Loading...</Text>
    )
    else
    return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {this.state.imageLink.map((element) => (
        <Image source={{uri: element}} style={{width: 400, height: 400}} />
      ))}
      </ScrollView>
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

export default MyAlbum