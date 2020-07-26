/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screen/Splash'
import Login from './Screen/Login'
import Detail from './Screen/Detail'
import Signup from './Screen/Signup'
const Stack = createStackNavigator()
const App = ()=>{
  return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={navLogin} />
        <Stack.Screen name="Detail" component={Detail} options={navStyle} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

const navStyle = {headerStyle:{
  backgroundColor: '#009378',
}, headerTintColor: '#fff'}
const navLogin = {
  headerShown:false,
  headerStyle:{
    backgroundColor: '#009378',
  }
}
export default App;
