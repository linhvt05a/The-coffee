import React from 'react'
import {View, Text, Button, StyleSheet, TextInput, Image, Platform,TouchableOpacity} from 'react-native'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
const Login = ({navigation}) =>{
    const [data, setData] = React.useState({
        user_name:'',
        password:'',
        validateInput:false,
        securedText : true,
        isValidUser: true,
        isValidPassword: true,
        txt : false
    })
    const changeInput = (val) =>{
      if(val.trim().length >= 4){
       setData({...data, user_name: val,validateInput: true, isValidUser: true})
      }else {
        setData({...data, user_name: val,validateInput: false, isValidUser: false})
      }
    }

   const changeInputPass = (val) =>{
        if(val.trim().length >= 8){
            setData({...data, password: val, isValidPassword: true})
        }else {
            setData({...data, password: val, isValidPassword: false})
        }
    }
    const loginHandler = (user_name, password) =>{
        if(data.user_name.length === 0 && data.password.length === 0){
           setData({...data, user_name: user_name, password:password,isValidPassword: false, isValidUser: false})
        }else if (data.user_name.length < 4 && data.password.length < 8){
            setData({...data, user_name: user_name, password:password,isValidPassword: false, isValidUser: false})  
        }else if(data.user_name.length >= 4 && (data.password.length === 0 || data.password.length < 8)){
            alert('wrong pass')
        }
        else if (data.user_name.length === 0 || data.user_name.length < 4){
            alert('wrong user')
        }
         else {
            navigation.navigate('Detail')
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txt}>Welcome Extellegent Coffee</Text>
                <Image style={styles.img} source={require('../Images/coffee.jpg')}/>
            </View>
            <View style={styles.card}>
            <Text>Username</Text>
                <View style={styles.actions}>
                    <TextInput style={styles.txtInput} placeholder="Enter username" onChangeText={(val)=>changeInput(val)}/>
                   {data.isValidUser ? null : <Text style={styles.txtValid}>Username must be 4 characters long.</Text>}
                </View>

                <Text style={styles.txtPass}>Password</Text>
              <View style={styles.actions}>
              <TextInput style={styles.txtInput} placeholder="Enter password" onChangeText={(val)=>changeInputPass(val)}/>
             { data.isValidPassword ? null : <Text style={styles.txtValid}>Password must be 8 characters long..</Text>}
              <TouchableOpacity>
                <Text style={styles.txtForgot}>Forgot password ?</Text>
              </TouchableOpacity>
              </View>
                <TouchableOpacity  onPress={()=> loginHandler(data.user_name, data.password)}>
                    <View style={styles.btnView}>
                        <Text style={styles.txtLogin}>Sign In</Text>
                    </View>
                </TouchableOpacity> 

                <TouchableOpacity  onPress={()=> navigation.navigate('Signup')}>
                    <View style={styles.btnViewSignup}>
                        <Text style={styles.txtSignup}>Sign up</Text>
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
      flex:2,
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
        marginTop: 25,
        alignItems:'center',
        justifyContent:'center',
    },
    txtLogin:{
        color:'#fff'
    },
    txtForgot:{color:'#009378'},
    txtValid :{color:'red',},
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
export default Login