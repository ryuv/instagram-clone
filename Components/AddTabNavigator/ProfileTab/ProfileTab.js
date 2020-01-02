import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
    
 } from 'react-native'; 
import {
    Icon,
    Header,
    Left,
    Body,
    Right,
    Container,
    Content,
    Button
} from 'native-base';
import MyProfile from './MyProfile';

export default class ProfileTab extends Component {
    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Icon name='person' style={{color: tintColor}}/>
        )
    }
    render(){
         return (
             <Container style={styles.container}>
                 <Header>
                     <Left>
                        <Icon name='md-person-add' style={{marginLeft:10}}/>
                     </Left>
                     <Body>
                        <Text style={{fontSize:15, fontWeight:'bold'}}>gitbuh</Text>
                     </Body>
                     <Right>
                         <Icon name='ios-menu' style={{marginRight:10}}></Icon>
                     </Right>
                 </Header>
                 <Content>
                    <View style={{flexDirection:'row', paddingTop:10, }}>
                        <View style={{flex:1, alignItems:'center'}}>
                        <Image source={{ url: 'https://i.postimg.cc/FKxgFnzj/2020-01-01-5-32-09.png' }}
                                style={{width:75, height:75, borderRadius:37.5}}/>
                        </View>
                        <View style={{flex:3, justifyContent: 'center'}}>
                            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontSize:18,fontWeight:'500'}}>16</Text>
                                    <Text style={{fontSize:13, color:'gray'}}>게시글</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontSize:18,fontWeight:'500'}}>10<Text style={{fontSize:15}}>만</Text></Text>
                                    <Text style={{fontSize:13, color:'gray'}}>팔로워</Text>
                                </View>
                                <View style={{alignItems:'center'}}>
                                    <Text style={{fontSize:18,fontWeight:'500'}}>192</Text>
                                    <Text style={{fontSize:13, color:'gray'}}>팔로잉</Text>
                                </View>
                            </View>
                        </View>
                     </View>
                     <View style={{flex:1,padding:20}}>
                         <Text style={{fontWeight:'bold'}}>gitbuh</Text>
                         <Text>Dream Big Dreams 💫</Text>
                     </View>

                     <View style={{flexDirection:'row'}}>
                         <Button bordered
                            style={{flex:1,height:30,marginLeft:20, justifyContent:'center',borderColor: 'gray',}}>
                             <Text>프로필 수정</Text>
                         </Button>
                         <Button bordered dark
                            style={{flex:1,height:30,marginLeft:20,marginRight:10,justifyContent:'center', borderColor: 'gray'}}>
                             <Text>홍보</Text>
                         </Button>
                     </View>

                     <MyProfile/>


                 </Content>
                 
             </Container>
         );
    }
 }

 const styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:'white'
     },
 });