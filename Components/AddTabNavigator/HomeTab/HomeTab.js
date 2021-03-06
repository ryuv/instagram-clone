import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
 } from 'react-native'; 
import {
    Container, 
    Content, 
    Icon,
    Header,
    Left,
    Body,
    Right} from 'native-base';
import CardComponent from './CardComponent';
import StoryHeader from './StoryHeader';

export default class HomeTab extends Component {

    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Icon name='ios-home' style={{color: tintColor}}/>
        )
    }

    render(){
         return (
             <Container style={styles.container}>
                <Header>
                    <Left><Icon name='ios-camera' style={{ paddingLeft:10 }}/></Left>
                    <Body><Text>Instagram</Text></Body>
                    <Right><Icon name='ios-send' style={{ paddingRight:10 }}/></Right>
                </Header>

                 <Content>
                    {/*스토리 헤더*/}
                     <StoryHeader/>
                    
                    {/*인스타 피드*/}
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