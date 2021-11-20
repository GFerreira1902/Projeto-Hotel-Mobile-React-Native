import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import InicialScreen from './screens/InicialScreen';
import CheckScreen from './screens/CheckScreen';
import ConfirmaReservaScreen from './screens/ConfirmaReservaScreen';
import PagamentoScreen from './screens/PagamentoScreen';
import { Text, View, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  const [exibeSplash, setExibeSplash] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setExibeSplash(false);
    }, 3000);
  }, []);


  return(
    <> 
      <NavigationContainer>  
                
        { 
          exibeSplash ? (<SplashScreen />) :
        
          (<Stack.Navigator>

            <Stack.Screen name = 'login' component={LoginScreen} options={{headerShown:false}}/ >
            <Stack.Screen name = 'home' component={InicialScreen} options={{headerShown:false}}/>
            <Stack.Screen name = 'check' component={CheckScreen} options={{headerShown:false}}/ >           
            <Stack.Screen name = 'pagamento' component={PagamentoScreen} options={{headerShown:false}}/ >
            <Stack.Screen name = 'confirmareserva' component={ConfirmaReservaScreen} options={{headerShown:false}}/ >
            <Stack.Screen name = 'cadastro' component={RegisterScreen} options={{headerShown:false}}/>
            
          </Stack.Navigator>)
        }

      </NavigationContainer>
    </>
  )  
}
