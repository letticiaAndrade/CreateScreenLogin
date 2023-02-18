import React from "react";
import { Text,View,TouchableOpacity, Image } from "react-native";
import pessoaLogin from '../../assets/pessoaLogin.png'

export const Home =({navigation})=> {
    return (
        <View style={{flex: 1}}>

        <View style={{padding:30}}>
         <Text style={{fontSize:20, color:'black', fontWeight:'bold'}} >LogoMarca</Text>
        </View>

                <View style={{alignItems:'center'}}>
            <Image resizeMode='contain'source={pessoaLogin} style={{width:300, height:300}}/>
            </View>

            <View style={{ alignItems:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:30}}>Hello  !</Text>
            <Text style={{color: '#8b8d96', marginVertical:5, textAlign:'center', fontSize:14}}>Best place to write life stories and {'\n'} 
            share your journey experiencies</Text>
                </View>

            <View style={{flexDirection:'column', alignItems:'center', marginTop:40}}>
            <TouchableOpacity style={{borderWidth:1, padding:4, width:200, borderRadius:7, marginBottom:20, backgroundColor:'#90CAF9', borderColor:"#90CAF9"}} onPress={()=> navigation.navigate('Login')}>
            <Text style={{textAlign:'center', fontSize:16, color:'white'}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth:2, padding:4, width:200, borderRadius:7, borderColor: '#90CAF9'}}>
          <Text style={{textAlign:'center', fontSize: 16}}>SIGNUP</Text>
        </TouchableOpacity>
        </View>
        </View>
       
    )
}
