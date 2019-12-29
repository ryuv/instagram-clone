import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet    
 } from 'react-native'; 
import {Container, Content, Icon} from 'native-base';
import CardComponent from '../CardComponent';

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Icon name='ios-home' style={{color: tintColor}}/>
        )
    }

    render(){
         return (
             <Container style={styles.container}>
                 <Content>
                     <CardComponent 
                        img="https://i.postimg.cc/ZK21p1LY/IMG-7069.jpg" 
                        data="귀요미 샤샤의 하루"/>
                    <CardComponent
                        img="https://i.postimg.cc/Jn2jnwfZ/IMG-7006.jpg"
                        data="낮잠 자는 중"/>
                    <CardComponent
                        img="https://i.postimg.cc/Pf0F30CC/IMG-7047.jpg"
                        data="설이 귀여워어"/>
                 </Content>
             </Container>
         );
    }
 }

 const styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:'white',
     }
 });