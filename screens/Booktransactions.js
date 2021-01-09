import React from 'react'
import {Text,View,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import Permissions from 'expo-permissions'
export default class Booktransactions extends React.Component{
    constructor(){
        super()
        this.state = {
            bookid:"",studentid:"",
            hasCameraPermisson:false,
            scanned:false,
            scandata:""
        }
    }
    getCameraPermission = async()=>{
        const {granted} = await Permissions.askAsync(Permissions.CAMERA)
    }
    render(){
        return(
        <View>
        <Text>
        transactions
        </Text>
        <View style = {{flexDirection:"row"}}>
        <TextInput style = {style.box} placeholder = "bookid" on onChangeText = {(Text)=>{this.setState({bookid:Text})}} />
        <TouchableOpacity style = {style.button}>
        <Text>
        Scan
        </Text>
        </TouchableOpacity>
        </View>
        <View style = {{flexDirection:"row"}}>
        <TextInput style = {style.box} placeholder = "studentid" on onChangeText = {(Text)=>{this.setState({studentid:Text})}} />
        <TouchableOpacity style = {style.button}>
        <Text>
        Scan
        </Text>
        </TouchableOpacity>
        </View>
        </View>           
        )
    }
}
const style = StyleSheet.create({
    box:{
        borderWidth:2,
        padding:10,
        marginTop:50,
        backgroundColor:"coral"
    },
    button:{
        marginTop:50,
        padding:10,
        backgroundColor:"pink"
    }
})