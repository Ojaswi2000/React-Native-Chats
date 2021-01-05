import React, { Component } from 'react';
import {View,StyleSheet, Text,TextInput,TouchableOpacity} from 'react-native';

export default class Home extends Component
{
    state={
        name:'',
    };
    render()
    {
        return(
            <View>
                <Text style={styles.title}>
                    Enter your name:
                </Text>
                <TextInput style={styles.nameInput} 
                placeholder='Ojaswi Awasthi' 
                onChangeText={(text)=>{
                    this.setState({
                        name:text,

                    })
                }}
                value={this.state.name}
                />
                <TouchableOpacity onPress={()=>{
                    alert(this.state.name);

                }}>
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>
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
    },
    buttonText:{
        fontSize:17,
        color:'blue',
        marginLeft:10,
        
    }
});
