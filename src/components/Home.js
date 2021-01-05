import React, { Component } from 'react';
import {View,StyleSheet, Text,TextInput} from 'react-native';

export default class Home extends Component
{
    render()
    {
        return(
            <View>
                <Text style={styles.title}>
                    Enter your name:
                </Text>
                <TextInput style={styles.nameInput} placeholder='Ojaswi Awasthi' />
            </View>
        );
    }
}
const styles=StyleSheet.create({
    title:{
        marginTop:10,
        marginLeft:10,
        fontSize:20,
    },
    nameInput:{
        height:40,
        borderWidth:2,
        marginTop:30,
        borderColor:'black',
        margin:20,
        padding:10
    }
});