import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity,
  FlatList,
  Dimensions,
  Alert, ImageBackground
} from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';

import { ScrollView } from 'react-native-gesture-handler';


//Variables 
var { width } = Dimensions.get('window');


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {



    };
  }

  openImage = () => {


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

                  Visitor Sign Out

                </Text>

              </View>


            </TouchableOpacity>

          </View>

          <View style={styles.marginDimensionTop} />

            <TouchableOpacity onPress={this.openImage()}>

              <Text style={styles.buttonHeaderTextLeft}>Click here to look at our site map</Text>

            </TouchableOpacity>


          <View style={styles.marginDimension} />

          <View style={styles.emptyView} />

          <View style={styles.marginDimension} />

          <View style={{ justifyContent: 'center' }}>
            <Image
              style={styles.alignImage}
              source={require('../assets/h&sSignature.png')}
            />
          </View>

          <View style={styles.marginTop18} />


          <TouchableOpacity
            style={styles.hsButtonContainer}>
            <Text style={styles.buttonText}>Report Health {'&'} Safety</Text>
          </TouchableOpacity>

          <View style={styles.marginDimension} />

          <View style={styles.emptyView} />

          <View style={styles.marginDimension} />

          <Text style={styles.buttonHeaderText}>Key Site Contact Details</Text>

          <View style={styles.marginDimension} />

          <View style={styles.rowButton}>

            <View>

              <Text style={styles.buttonHeaderText2}>Grower Manager</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Herman Fourie (021 967 036)</Text>

            </View>

            <View>
              <Text style={styles.buttonHeaderText2}>Production Manager</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Gerard Snyman (021 317 987)</Text>
            </View>

          </View>

          <View style={styles.marginDimension} />

          <Text style={styles.buttonHeaderText2}>Team Leaders</Text>

          <View style={styles.marginDimensionSmallTop} />

          <Text style={styles.buttonHeaderText3}>Aroha Manjoor (021 805 036)</Text>

          <View style={styles.marginDimensionSmallTop} />

          <Text style={styles.buttonHeaderText3}>Linda Jolly (021 967 036)</Text>

          <View style={styles.marginDimension} />

          <View style={styles.emptyView} />

          <View style={styles.marginDimension} />

          <Text style={styles.buttonHeaderText}>H{'&'}S REP's</Text>

          <View style={styles.marginDimension} />

          <View style={styles.rowButton}>

            <View>
              <Image
                style={styles.alignImageHS}
                source={require('../assets/demoPic.jpg')}
              />
              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Seeta Singh</Text>

            </View>

            <View>
              <Image
                style={styles.alignImageHS}
                source={require('../assets/demoPic.jpg')}
              />
              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Seeta Singh</Text>

            </View>

            <View>
              <Image
                style={styles.alignImageHS}
                source={require('../assets/demoPic.jpg')}
              />
              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Seeta Singh</Text>

            </View>

          </View>

          <View style={styles.marginDimension} />

          <View style={styles.emptyView} />

          <View style={styles.marginDimension} />

          <Text style={styles.buttonHeaderText}>First Aid Trained</Text>

          <View style={styles.marginDimension} />

          <View style={styles.rowButton}>

            <View>

              <Text style={styles.buttonHeaderText2}>Front Of Site</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Linda Jolly - In house</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Neil Neville - In house</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Neil Neville - In house</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Ian Reid - In house</Text>

            </View>

            <View>
              <Text style={styles.buttonHeaderText2}>Back Of Site</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Linda Jolly - In house</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Logan Ward - In house</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Neil Neville - In house</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Ian Reid - In house</Text>

            </View>


          </View>

          <View style={styles.marginDimension} />

          <View style={styles.emptyView} />

          <View style={styles.marginDimension} />

          <Text style={styles.buttonHeaderText}>Fire Wardens</Text>

          <View style={styles.marginDimension} />

          <Text style={styles.buttonHeaderText2}>Head Warden</Text>

          <View style={styles.marginDimensionSmallTop} />

          <Text style={styles.buttonHeaderText3}>Logan Ward</Text>

          <View style={styles.marginDimension} />

          <View style={styles.rowButton}>

            <View>

              <Text style={styles.buttonHeaderText2}>Front Of Site</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Linda Jolly - In house</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Neil Neville - In house</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Neil Neville - In house</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Ian Reid - In house</Text>

            </View>

            <View>
              <Text style={styles.buttonHeaderText2}>Back Of Site</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Linda Jolly - In house</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Logan Ward - In house</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Neil Neville - In house</Text>

              <View style={styles.marginDimensionSmallTop} />

              <Text style={styles.buttonHeaderText3}>Ian Reid - In house</Text>

            </View>


          </View>

          <View style={styles.marginDimension} />

        </View>



      </ScrollView>


    );
  }
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
  },

  hsButtonContainer: {

    backgroundColor: '#cc0000',
    borderRadius: 25,
    padding: 10,
    marginRight: 30,
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 20,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center'

  },

  alignImage: {

    resizeMode: 'cover',
    alignSelf: 'center'

  },

  alignImageHS: {

    width: 220,
    height: 300,
    margin: 10,

  },

  buttonHeaderText: {

    fontSize: 33,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#2C903D',
    textTransform: 'uppercase'

  },

  buttonHeaderText2: {

    fontSize: 27,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic'

  },

  buttonHeaderTextLeft: {

    fontSize: 27,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: 45,
    textDecorationLine: 'underline',

  },

  buttonHeaderText3: {

    fontSize: 24,
    textAlign: 'center',

  },

  marginDimensionTop: {

    marginTop: 20,

  },

  marginTop18: {

    marginTop: 19,

  },

  marginDimension: {

    marginTop: 50,

  },

  emptyView: {

    borderBottomColor: '#c0c0c0',
    borderBottomWidth: 1,
    marginRight: 40,
    marginLeft: 40

  },

  marginDimensionRight: {

    marginRight: 18,

  },

  marginDimensionSmallTop: {

    marginTop: 15,

  },

  formContainer: {

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

  buttonMiddle: {

    alignItems: 'center',
    backgroundColor: '#2C903D',
    borderRadius: 25,
    height: 75,
    justifyContent: 'center',
    width: 300,
    alignSelf: 'center'

  },


  buttonText: {

    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }

});  