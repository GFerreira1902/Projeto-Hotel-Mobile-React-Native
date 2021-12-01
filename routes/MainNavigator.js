import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserContext } from '../context/UserContext';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import InicialScreen from '../screens/InicialScreen';
import CheckScreen from '../screens/CheckScreen';
import ConfirmaReservaScreen from '../screens/ConfirmaReservaScreen';
import PagamentoScreen from '../screens/PagamentoScreen';
import MinhasReservas from '../screens/MinhasReservas';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [usuario] = useContext(UserContext);
  return (
    <Stack.Navigator>
      {usuario.logado ? (
        <>
          <Stack.Screen name="home" component={InicialScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="check" component={CheckScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="pagamento" component={PagamentoScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="confirmareserva" component={ConfirmaReservaScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="reservas" component={MinhasReservas} options={{ headerShown: false }}/>
        </>
      ) : (
        <>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="cadastro"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}