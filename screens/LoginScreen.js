import { StatusBar} from 'expo-status-bar'
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native';
import {Button} from 'react-native-elements';





export default function LoginScreen({navigation}) {

  const [ email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const botaoInicial = () =>{
    navigation.push('home');
  };

  const botaoCadastro = () =>{
    navigation.push('cadastro')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerheader}>
        <Text style={styles.headertexts}>PALACE HOTEL</Text>
      </View>

      <ScrollView style= {styles.containerscrool}>
        <StatusBar hidden />

        <TextInput placeholder='EMAIL' 
          style={styles.textInput} 
          autoCapitalize={false}
            keyboardType="email-address"
          placeholderTextColor = 'black'
          onChangeText={text => setEmail(text)}
        />

        <TextInput placeholder='SENHA' 
          style={styles.textInput} 
          autoCapitalize={false}
          secureTextEntry={true}
          placeholderTextColor = 'black'
          onChangeText={text => setSenha(text)}
        />

        <View style={styles.button}>
          <Button buttonStyle={{backgroundColor: 'black', width:200,}}  title="ENTRAR"  color = 'black'  onPress = {botaoInicial} />
        </View>

        <View style={styles.button2}>
          <Button buttonStyle={{backgroundColor: 'black', width:200, color: 'black'}}  title='CADASTRE-SE'  onPress = {botaoCadastro} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#E8AF20',
  },
  containerscrool:{
    justifyContent: 'center',
    padding: 10,
  },
  containerheader: {
    flex: 0.3,
    borderWidth: 5,
    border: 'solid black 6px',
    backgroundColor: '#E8AF20',
    margin:15,
    padding:10,
  },
  headertexts:{
    margin:10,
    padding:10,
    fontSize:30,
    textAlign:'center',
    fontWeight: 'bold'
  },
  textInput:{
    marginBottom: 16,
    padding: 10,
    borderBottomColor: '#131212',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  button:{
    marginBottom: 16,
    marginTop: 30,
    alignSelf:'center'
  },
  button2:{
    marginBottom: 16,
    alignSelf:'center'
  }
});