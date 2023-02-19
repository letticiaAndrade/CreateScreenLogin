import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Sign } from "./Sign";

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
                <TextInput secureTextEntry={true} style={{borderBottomWidth:1, fontSize:20}} placeholder={'Senha'}/>
            </View>
           
           <View style={{alignItems: 'center', padding:30}}>
                <TouchableOpacity style={{backgroundColor:'#90CAF9', width:250, alignItems:'center', borderRadius: 7, padding:10}} onPress={()=> ''}>
                    <Text style={{fontSize:20, color:'white'}}>LOGIN</Text>
                </TouchableOpacity>
           </View>

           <View style={{alignItems:'center'}}>
                <TouchableOpacity>
                <Text style={{color:'#8b8d96', fontSize:15}}> Forgot Password?</Text>
                </TouchableOpacity>
           </View>

           <View style={{flexDirection:'row', paddingHorizontal:75,alignItems:'center', marginVertical:40, }}>
                <View style={{borderBottomWidth:1, borderColor:'#8b8d96',width:120, marginRight:10}}></View>
                <View>
                    <Text style={{fontWeight:'bold'}}>or</Text>
                </View>
                <View style={{borderBottomWidth:1, borderColor:'#8b8d96', width:120, marginLeft:10}}></View>
           </View>

           <View style={{alignItems:'center'}}>
                <Text style={{color:'#8b8d96', fontSize: 15}}>Social Media Login</Text>
                <View style={{flexDirection:'row'}}>
                    <Ionicons.Button name='logo-google' color={'red'} size={20}  backgroundColor={'white'} onPress={()=>""}/>
                    <Ionicons.Button name='logo-facebook' color={'blue'} size={20}  backgroundColor={'white'} onPress={()=>""}/>
                    <Ionicons.Button name='logo-apple' size={20} color={'black'} backgroundColor={'white'} onPress={()=>""}/>

                </View>

               
           </View>
           <View style={{marginHorizontal:50, flexDirection:'row', marginTop: 12}}>
                    <Text style={{color:'#8b8d96', fontSize:14}}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate(Sign)} >
                        <Text style={{color:'blue', paddingLeft:10}} >Sign up</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}
