import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet    
 } from 'react-native'; 
import {Icon} from 'native-base';

// import axios from 'axios';
// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function (response) {
    // console.log(response);
//   })
//   .catch(function (error) {
    // console.log(error);
//   });







export default class ProfileAlbums extends Component {    

    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Icon name='browsers' style={{color: tintColor}}/>
        )
    }

    render(){
         return (
             <View style={styles.container}>
                 <Text>
                     ProfileAlbums
                 </Text>
             </View>
         );
    }
 }

 const styles = StyleSheet.create({
     container:{
         flex:1,
         alignItems:'center',
         justifyContent:'center'
     }
 });