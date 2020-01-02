import React, { Component } from 'react';
import { View,
    ScrollView,
    Image,
    Text,
    StyleSheet
 } from 'react-native';
 import {Icon,Thumbnail} from 'native-base';

 export default class StoryHeader extends Component{
    render() {

        return (
            <View style={{height:110 ,borderBottomWidth:1,borderBottomColor: '#f1f2f6',}}>
                
                <View style={{ flex: 3 }}>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: 'center',
                        paddingStart: 5,
                        paddingEnd: 5,
                        
                      }}
                      > 
                      <View style={{alignItems:'center'}}>
                        <Thumbnail source={{uri: 'https://steemitimages.com/u/newbijohn/avatar' }} style={styles.thumb}/>
                        <Text>sujae</Text>
                      </View>
                      <View style={{alignItems:'center'}}>
                        <Thumbnail source={{uri: 'https://steemitimages.com/u/jacobyu/avatar' }} style={styles.thumb}/>
                        <Text>hyensu</Text>
                      </View>
                      <View style={{alignItems:'center'}}>
                        <Thumbnail source={{uri: 'https://steemitimages.com/u/blockchainstudio/avatar' }} style={styles.thumb}/>
                        <Text>xxxgdrgxxx</Text>
                      </View>
                      <View style={{alignItems:'center'}}>
                        <Thumbnail source={{uri: 'https://steemitimages.com/u/gomdory/avatar' }} style={styles.thumb}/>
                        <Text>shasha</Text>
                      </View>
                      <View style={{alignItems:'center'}}>
                        <Thumbnail source={{uri: 'https://steemitimages.com/u/bbooaae/avatar' }} style={styles.thumb}/>
                        <Text>yumdda</Text>
                      </View>
                      <View style={{alignItems:'center'}}>
                        <Thumbnail source={{uri: 'https://steemitimages.com/u/codingman/avatar' }} style={styles.thumb}/>
                        <Text>lilpump</Text>
                      </View>
                      <View style={{alignItems:'center'}}>
                        <Thumbnail source={{uri: 'https://steemitimages.com/u/bukio/avatar' }} style={styles.thumb}/>
                        <Text>bieber</Text>
                      </View>

                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    thumb:{
        marginHorizontal: 8, 
        borderColor: 'pink', 
        borderWidth: 3,
        width:65,
        height:65,
        borderRadius: 32.5,
    }
});