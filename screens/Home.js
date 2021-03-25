import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Dimensions, ImageBackground
} from 'react-native';

var { width } = Dimensions.get('window');


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {


    }
  }

  render() {
    return (

      <View style={styles.container}>

        
        <ImageBackground
          style={{ width: width, height: 500, position: 'relative', top: 2, right: 2}}
          resizeMode={'cover'}
          source={require('../assets/tandgImage.jpg')}
        >

          <Text
          style={{fontWeight: 'bold', color: 'black', position: 'absolute', top: 0, right: 0, padding:15}}
          >
            Welcome To HAR S
          </Text>
          </ImageBackground>
      </View>


    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  backgroundImage: {

    width: width * 0.5,
    height: 100,

  },

  thumbnail: {

    resizeMode: 'cover'
  },
});  