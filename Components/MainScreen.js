import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet    
 } from 'react-native'; 
import { Icon } from 'native-base';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeTab from './AddTabNavigator/HomeTab';
import AddMediaTab from './AddTabNavigator/AddMediaTab';
import LikesTab from './AddTabNavigator/LikesTab';
import ProfileTab from './AddTabNavigator/ProfileTab';
import SearchTab from './AddTabNavigator/SearchTab';

const AppTabNavigator = createBottomTabNavigator({
    HomeTab : {screen:HomeTab},
    SearchTab: {screen:SearchTab},
    AddMediaTab: {screen:AddMediaTab},
    LikesTab:{screen:LikesTab},
    ProfileTab:{screen:ProfileTab}
})
const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
    static navigationOptions = {
        headerLeft: <Icon name='ios-camera' style={{paddingLeft:10}}/>,
        title: 'Instagram',
        headerRight: <Icon name='ios-send' style={{paddingRight:10}}/>
    }

    render(){
         return <AppTabContainet/>
    }
 }

 const styles = StyleSheet.create({
     container:{
         flex:1,
         alignItems:'center',
         justifyContent:'center'
     }
 });