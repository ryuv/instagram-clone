import React, { Component } from 'react';
import {Icon} from 'native-base';
import AddMediaMain from './AddMediaMain';

export default class AddMediaTab extends Component {
    static navigationOptions = {
        tabBarIcon : ({tintColor}) => (
            <Icon name='ios-add-circle' style={{color : tintColor}}/>
        ),
    }
    
    render(){
        return(
            <AddMediaMain/>
        );
        
    }
    
}
