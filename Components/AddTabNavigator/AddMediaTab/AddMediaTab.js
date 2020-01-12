import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet    
 } from 'react-native'; 

 import {Icon, Left, Body, Right, Container, Header, Content} from 'native-base';




export default class AddMediaTab extends Component {
    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Icon name='ios-add-circle' style={{color : tintColor}}/>
        )
    }


    render(){
         return (
             <Container>
                 <Header>
                     <Left style={{paddingLeft: 10}}><Text>취소</Text></Left>
                     <Body><Text style={{fontSize:16}}>최근항목</Text></Body>
                     <Right style={{paddingRight: 10}}><Text>다음</Text></Right>
                 </Header>

                 <Content>
                     <View >

                     </View>
                     <View>

                     </View>
                 </Content>
             </Container>
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