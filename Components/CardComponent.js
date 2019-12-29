import React, { Component } from 'react';
import { View,
    Image,
    Text,
    StyleSheet
 } from 'react-native';
 import {
     Card,
     CardItem, 
     Thumbnail, 
     Body, 
     Left, 
     Right,
     Button,
     Icon} from 'native-base';

 export default class CardCompnent extends Component{
    render() {
        const {data} = this.props;
        const {img} = this.props;

        return (
            <Card style={{borderColor:'white',}}>
                <CardItem>
                    <Left>
                        <Thumbnail 
                            source={{ uri: 'https://steemitimages.com/u/anpigon/avatar' }} 
                            style={{width:30}}
                        />
                        <Body>
                            <Text style={{fontSize:'16px', fontWeight:'700'}}>sujae</Text>
                            <Text>서울특별시</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image 
                        source={{uri:img}}
                        style={{ height:350, flex: 1 }}
                    />
                </CardItem>
                <CardItem style={{ height:45 }}>
                    <Left>
                        <Button transparent>
                        <Icon name='ios-heart' style={{ color:'black' }}/>
                        </Button>
                        <Button transparent>
                        <Icon name='ios-chatbubbles' style={{ color:'black' }}/>
                        </Button>
                        <Button transparent>
                        <Icon name='ios-paper-plane' style={{ color:'black' }}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{height:35, marginTop:-10}}>
                    <Text style={{fontWeight:'700',fontSize:'16px'}}>좋아요 103개</Text>
                </CardItem>
                <CardItem style={{marginTop:-8}}>
                    <Text style={{fontSize:'16px'}}>
                        <Text style={{fontWeight: '700' ,}}>
                            sujae    
                        </Text> {data}
                    </Text>
                </CardItem>
                <CardItem style={{marginTop:-5,}}>
                    <Text style={{color:'gray'}}>12월 31일</Text>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    }
});