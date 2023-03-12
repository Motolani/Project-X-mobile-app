import { View, Text } from 'react-native'
import React, {useState, useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import DashboardTab from './src/screens/DashboardTab';

const Stack = createNativeStackNavigator();
const App = () => {
  const [userToken, setUserToken] = useState(1);
  
  return (
    <NavigationContainer>
    <Stack.Navigator >
     {userToken !== 0? <Stack.Screen options={{ headerStyle: { backgroundColor: '#FFFFFF', } }} name="Dashboard" component={DashboardTab} /> : <Stack.Screen  options={{headerStyle: { backgroundColor: '#d3d3d3', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)'} }} name="Log in" component={Login} />}  
     
     <Stack.Screen options={{ headerStyle: { backgroundColor: '#FFFFFF', } }} name="Register" component={Register} />
      
    </Stack.Navigator>
    
  </NavigationContainer>
  )
}

export default App