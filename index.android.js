/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];
export default class RadioButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    };
  };
  valFunc(ev){
     this.setState({value:ev});  
     console.log('state value',this.state.value);
     console.log('value',ev);
          
   }
  render() {
    return (
      <View style={styles.container}>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.valFunc(value)}}
        />
        <Text>{this.state.value}</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RadioButton', () => RadioButton);
