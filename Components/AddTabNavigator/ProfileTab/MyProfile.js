import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet    
 } from 'react-native'; 
import { Icon } from 'native-base';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import ProfileAlbum from './ProfileAlbum';
import ProfileAlbums from './ProfileAlbums';


const AppTabNavigator = createMaterialTopTabNavigator({
    ProfileAlbum:{screen:ProfileAlbum},
    ProfileAlbums:{screen:ProfileAlbums}
},{
    animationEnabled:true,
    tabBarOptions:{
        style:{
            ...Platform.select({
                ios:{
                    backgroundColor:"white"
                }
            }),
            marginTop: 10,
            marginBottom: 0,
            paddingBottom: 5,
            borderColor: '#d1cece',
            borderTopWidth: 0.5,

        },
        indicatorStyle: {backgroundColor:'none', borderBottomWidth: 1.2, borderColor:'gray'},
        activeTintColor: '#000',
        inactiveTintColor : "#d1cece",
        iconStyle: {height:30},
        upperCaseLabel: false,
        showLabel: false,
        showIcon: true,
    },
    
})
const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MyProfile extends Component {

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