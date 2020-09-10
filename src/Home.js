import React,{useState} from 'react';
import {View,StyleSheet,Image,Text,Dimensions} from 'react-native';

export default function Home(){
    const [text,setText]=useState('Welcome to React-native UVCE?');
    return (<View style={styles.container}>
                <Text style={styles.text}> {text}</Text>       
            </View>)
}

const styles=StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFill,
        justifyContent: 'center'
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center'
    }
})
