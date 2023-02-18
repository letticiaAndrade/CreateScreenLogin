import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const Login= ({navigation})=> {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{ padding:33, height:100,width:120 }}>
                <Ionicons.Button name="arrow-back" size={30} color={'black'} backgroundColor='white' onPress={()=> navigation.navigate('Home')} activeOpacity={1}
               iconStyle={{width:30, height:30}}>
                </Ionicons.Button>
            </View>

            <View style={{backgroundColor:"red"}}>
                <Text style={{fontWeight:'bold', fontSize:30}}>Welcome!</Text>
            </View>
           
        </View>
    )
}
