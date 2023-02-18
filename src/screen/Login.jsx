import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const Login= ({navigation})=> {
    return (
        <View style={{flex:1}}>
            <View>
                <Ionicons.Button name="arrow-back" size={30} color={'black'} backgroundColor='white' onPress={()=> navigation.navigate('Home')}
                 style={{margin: 20}}>

                </Ionicons.Button>
            </View>

            <View style={{backgroundColor:"red"}}>
                <Text style={{fontWeight:'bold', fontSize:30}}>Welcome!</Text>
            </View>
           
        </View>
    )
}
