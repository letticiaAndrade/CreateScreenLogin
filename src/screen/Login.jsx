import React from "react";
import { Text, TextInput, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const Login= ({navigation})=> {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{ padding:25, height:100,width:120 }}>
                <Ionicons.Button name="arrow-back" size={30} color={'black'} backgroundColor='white' onPress={()=> navigation.navigate('Home')} activeOpacity={1}
               iconStyle={{width:30, height:30}}>
                </Ionicons.Button>
            </View>

            <View style={{paddingLeft:60}}>
                <Text style={{fontWeight:'bold', fontSize:30}}>Welcome!</Text>
                <Text style={{color:'#8b8d96', fontSize:20}}>Sign In to continue</Text>
            </View>

            <View style={{ paddingLeft:50, paddingRight:80}}>
                <TextInput keyboardType="email-address" style={{borderBottomWidth:1, fontSize:20, marginVertical:50}} placeholder={'Email'}>
                </TextInput>
                <TextInput secureTextEntry={true} style={{borderBottomWidth:1, fontSize:20}} placeholder={'Senha'}> </TextInput>
            </View>
           
           <View>
            
           </View>
        </View>
    )
}
