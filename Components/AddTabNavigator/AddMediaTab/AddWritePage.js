import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    TextInput,
    Button
 } from 'react-native'; 


export default class AddWritePage extends Component {
  

  state = {
    uploadImg:'',
    uploadText:'',
  }

  async getImage(){
    const { navigation } = this.props;
    await this.setState({uploadImg: navigation.getParam("Image")});
  }

  componentWillMount() {
    this.getImage();
  }

  render() {
    return (
      <View style={{ flexDirection: 'row',}}>
        <Image 
          source={{url:this.state.uploadImg}}
          style={{flex:1, height:100}}    
        />
        <TextInput 
          multiline={true}
          numberOfLines={4}
          style={{flex:3, height:100, borderColor: '#dddddd', borderWidth:1,}}  
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={6}
          multiline={true}
          onChangeText={(text)=>this.setState({uploadText:text})}
        />
        <Button title="글 작성하기" onPress={()=>{}}/>
      </View>
    );
  }

}

