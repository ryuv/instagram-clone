import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet    
 } from 'react-native'; 
import AddMediaTab from './AddMediaTab';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class AddWritePage extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
    }
  }
