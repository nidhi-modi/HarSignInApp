import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Dimensions
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

        
        <Image
          style={{ width: width, height: 225 }}
          resizeMode={'cover'}
          source={require('../assets/tandgImage.jpg')}
        />
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