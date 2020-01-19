import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableHighlight,
    Button
 } from 'react-native'; 

 import {Icon, Left, Body, Right, Container, Header, Content} from 'native-base';
 import * as Permissions from 'expo-permissions';
 import * as MediaLibrary from 'expo-media-library';


 import { createAppContainer } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack';
import AddWritePage from './AddWritePage';

class AddMediaTab extends Component {
    constructor(props){
        super(props);
    }
    
    static navigationOptions = {
        header:null
    };

    state = {
        imgArray:null,
        imgTop:null,
        loading: false,
    }



    requestPermission = async () => {
        const response = await Permissions.askAsync(Permissions.CAMERA);
        console.log(response);
    }

    mediaPermission = async () => {
        const request = await MediaLibrary.requestPermissionsAsync();
        console.log(request);
    }

    getAlbums = async () => {
        const albums = await MediaLibrary.getAlbumsAsync();
        const assets = await MediaLibrary.getAssetsAsync(albums[0].title);
        this.setState({imgArray:assets.assets})
        this.setState({imgTop:assets.assets[0].uri})
        this.setState({loading: true})
        console.log(this.state.imgArray);
    }

    componentWillMount() {
        this.requestPermission();
        this.mediaPermission();
        this.getAlbums();
        
    }


    render(){
        const win = Dimensions.get('window');
         return (
            <Container>
                <Header>
                    <Left style={{paddingLeft: 10}}></Left>
                    <Body><Text style={{fontSize:17, fontWeight: 'bold',}}>최근항목</Text></Body>
                    <Right style={{paddingRight: 10,}}>
                        <TouchableHighlight onPress={() => this.props.navigation.push('AddWritePage',{Image : this.state.imgTop})}>
                            <Text style={{fontWeight:'bold', fontSize:15}} >다음</Text>
                        </TouchableHighlight>
                    </Right>
                </Header>
                <Content>


                {this.state.loading? (
                    <View style={{height:'100%',width:win.width,padding:0}}>
                        <Image source={{url:this.state.imgTop}}
                            resizeMode={'cover'}
                            onPress={this.imageClick}
                            style={{flex:1, width:'100%', height:win.width, alignSelf: 'stretch',}}
                        />

                        <View style={{flexDirection:'row',flexWrap: 'wrap' ,borderTopWidth: 1, borderColor: 'white',}}>
                            {this.state.imgArray.map((img) => 
                                <TouchableHighlight onPress={()=>{this.setState({imgTop:img.uri})}} style={{width:'25%',height:100}}>
                                    <Image source={{url:img.uri}} 
                                        key={img.id} 
                                        style={{width:'100%', height:100}}
                                    />
                                </TouchableHighlight>
                            )}
                        </View>


                        
                        
                    </View>
                ) : (
                    <Text>
                    </Text>
                )}

                </Content>
            </Container>
             
         );
    }
 }

const AppNavigator = createStackNavigator(
    {
        AddMediaTab: {screen: AddMediaTab},
        AddWritePage: {screen: AddWritePage},
    },{
        tabBarPosition:"Top",
    }
  );
  
  export default createAppContainer(AppNavigator);
