import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const Splash = ({navigation}) =>{
    return(
      <View style ={styles.container}>
         <View style={styles.header}>
         </View>
         <View style={styles.card}>
            <Text style={styles.title}></Text>
            <Button title="Get started" onPress={()=> navigation.navigate('Login')}></Button>
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
      flex:1,
      backgroundColor:'#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
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
      width: 250,
      height: 250,
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
  
    }
    
  })
export default Splash;