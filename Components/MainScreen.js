import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet    
 } from 'react-native'; 
import { Icon } from 'native-base';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import HomeTab from './AddTabNavigator/HomeTab/HomeTab';
import AddMediaTab from './AddTabNavigator/AddMediaTab/AddMediaTab';
import LikesTab from './AddTabNavigator/LikesTab/LikesTab';
import ProfileTab from './AddTabNavigator/ProfileTab/ProfileTab';
import SearchTab from './AddTabNavigator/SearchTab/SearchTab';

const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab : {screen:HomeTab},
    SearchTab: {screen:SearchTab},
    AddMediaTab: {screen:AddMediaTab},
    LikesTab:{screen:LikesTab},
    ProfileTab:{screen:ProfileTab}
},{
    animationEnabled:true,
    tabBarPosition:"bottom",
    tabBarOptions:{
        style:{
            ...Platform.select({
                ios:{
                    backgroundColor:"white"
                }
            })
        },
        indicatorStyle: {backgroundColor:'none'},
        activeTintColor: '#000',
        inactiveTintColor : "#d1cece",
        iconStyle: {height:50},
        upperCaseLabel: false,
        showLabel: false,
        showIcon: true,
    },
    
})
const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
    static navigationOptions = {
        header:null
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