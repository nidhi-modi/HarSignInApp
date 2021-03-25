import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity,
  FlatList,
  Dimensions,
  Alert, ImageBackground
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';


var { width } = Dimensions.get('window');


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {


    };
  }


  render() {
    return (

      <ScrollView>

        <Image
          style={{ width: width, height: 500 }}
          resizeMode={'cover'}
          source={require('../assets/tandgImage.jpg')}
        />

        <View style={styles.formContainer}>

          <View style={styles.marginDimensionTop} />

          <View style={styles.rowButton}>

            <TouchableOpacity>

              <View style={styles.button}>

                <Text style={styles.buttonText}>

                  Visitor Sign In

                </Text>

              </View>


            </TouchableOpacity>

            <View style={styles.marginDimensionTop} />


            <TouchableOpacity>

              <View style={styles.button}>

                <Text style={styles.buttonText}>

                  Site Map

                </Text>

              </View>


            </TouchableOpacity>

          </View>

        </View>

      </ScrollView>


    );
  }
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
  },

  marginDimensionTop: {

    marginTop: 18,

  },

  marginDimensionRight: {

    marginRight: 18,

  },

  formContainer: {

    //backgroundColor: 'rgba(192,192,192,0.55)',
    //borderRadius: 5,
    padding: 5,
    paddingRight: 10,
    margin: 10,
    marginRight: 10,
    height: '100%',
    width: '100%'

  },

  rowButton: {

    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around'

  },

  button: {

    backgroundColor: '#2C903D',
    borderRadius: 25,
    flex: 1,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300

  },


  buttonText: {

    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }

});  