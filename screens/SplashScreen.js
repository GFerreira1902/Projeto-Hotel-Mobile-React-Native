import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.conteudo}>
      <Image style={styles.logo} source={require('../assets/splash.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 12,
  },
});