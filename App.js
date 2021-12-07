import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import InicialScreen from './screens/InicialScreen';
import CheckScreen from './screens/CheckScreen';
import ConfirmaReservaScreen from './screens/ConfirmaReservaScreen';
import PagamentoScreen from './screens/PagamentoScreen';
import MinhasReservas from './screens/MinhasReservas';
import {Text,View,StyleSheet,TextInput,SafeAreaView,ScrollView} from 'react-native';
import firebase from 'firebase';
import { UserProvider } from './context/UserContext';
import MainNavigator from './routes/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import 'react-native-gesture-handler';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ31Wh1_O2RAl7zfL5yOXvCOrHba7Yj1I",
  authDomain: "hotelaria-3ac85.firebaseapp.com",
  projectId: "hotelaria-3ac85",
  storageBucket: "hotelaria-3ac85.appspot.com",
  messagingSenderId: "6406751887",
  appId: "1:6406751887:web:95dc398ede4a349d1b12fa",
  measurementId: "G-FR2RH91T5W"
};

// Initialize Firebase
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  const [exibeSplash, setExibeSplash] = useState(true);    
 
  useEffect(() => {
    setTimeout(() => {
      setExibeSplash(false);
    }, 3000);
  }, []);

  return (
    <UserProvider>
      <NavigationContainer>
        {exibeSplash ? <SplashScreen /> : <MainNavigator />}
      </NavigationContainer>
    </UserProvider>
  );
}