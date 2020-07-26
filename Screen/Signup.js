import React from 'react'
import {View, Text, Button, StyleSheet, TextInput, Image, Platform,TouchableOpacity} from 'react-native'
import FontAwsome from 'react-native-vector-icons/FontAwesome'

const Signup = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.txt}>Welcome Extellegent Coffee</Text>
                <Image style={styles.img} source={require('../Images/coffee.jpg')}/>
            </View>
            <View style={styles.card}>
            <Text>Username</Text>
                <View style={styles.actions}>
                    <TextInput style={styles.txtInput} placeholder="Enter username"/>
                    <Text style={styles.txtValid}>Please enter email</Text>
                </View>
                <Text>Email</Text>
                <View style={styles.actions}>
                    <TextInput style={styles.txtInput} placeholder="Enter username"/>
                    <Text style={styles.txtValid}>Please enter email</Text>
                </View>
                <Text style={styles.txtPass}>Password</Text>
              <View style={styles.actions}>
              <TextInput style={styles.txtInput} placeholder="Enter password"/>
              <Text style={styles.txtValid}>Please enter password</Text>
              </View>
                <TouchableOpacity  onPress={()=> navigation.navigate('Signup')}>
                    <View style={styles.btnViewSignup}>
                        <Text style={styles.txtSignup}>Sign up</Text>
                    </View>
                </TouchableOpacity> 
                <Text style={styles.txtForgot}>Back to Login</Text>
                <TouchableOpacity  onPress={()=> navigation.navigate('Login')}>
                    <View style={styles.btnView}>
                        <Text style={styles.txtLogin}>Sign In</Text>
                    </View>
                </TouchableOpacity> 

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex : 1,
      backgroundColor : '#009378'
    },
    card:{
      flex:3,
      backgroundColor:'#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30,
    },
    header : {
      flex: 2,
      justifyContent:'center',
      alignItems:'center'
    },
    txt: {
      fontSize:25,
      color:'#ffff',
      marginBottom: 20
    },
    img:{
      width: 150,
      height: 150,
      borderRadius: 125,
     
    },
    title:{
      fontSize: 20,
      color:'#45160C',
      marginBottom: 20
    },
    btn:{
      marginTop: 20,
      borderTopLeftRadius: 10
  
    },
    txtInput:{height: 40, borderColor: 'gray', borderWidth: 1,
     borderRadius: 10, marginTop: 5},
    btnView:{
        backgroundColor:'#009378',
        height: 40,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
    },
    txtLogin:{
        color:'#fff'
    },
    txtForgot:{color:'#009378', marginTop: 10},
    txtValid :{color:'red', opacity:0},
    txtSignup:{color:'#009378'},
    txtPass:{marginTop: 10},
    btnViewSignup:{
    height: 40,
    borderRadius: 10,
    borderColor:'#009378',
    borderWidth: 1,
    marginTop: 20,
    alignItems:'center',
    justifyContent:'center',

},
    
  })
export default Signup