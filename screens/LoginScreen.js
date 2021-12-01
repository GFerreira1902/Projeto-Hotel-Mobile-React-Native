import { StatusBar} from 'expo-status-bar'
import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native';
import {Button} from 'react-native-elements';
import { UserContext } from '../context/UserContext';
import { useForm, Controller } from 'react-hook-form';
import firebase from 'firebase';

export default function LoginScreen({navigation, logado}) {

  const [ email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [usuario, setUsuario] = useContext(UserContext)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const botaoInicial = (values) =>{
    const { email, senha } = values;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        setUsuario({ nome: userCredential.user.displayName, logado: true });
      })
      .catch((error) => alert(error.message));
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

        <Controller
          control={control}
          name="email"
          rules={{
            required: { value: true, message: 'Email obrigatório' },
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput placeholder='EMAIL' 
              style={styles.textInput} 
              autoCapitalize={false}
              keyboardType="email-address"
              placeholderTextColor = 'black'
              onChangeText={text => setEmail(text)}
            />
          )}
        />
        {errors?.email && (
          <Text style={{ color: 'white', textAlign:'center' }}>{errors?.email?.message}</Text>
        )}

        <Controller
          control={control}
          name="senha"
          rules={{
            required: { value: true, message: 'Senha obrigatória' },
            minLength: { value: 6, message: 'Senha menor que 6 caracteres' }
          }}
          render={({ field: { value, onChange } }) => (
            <TextInput placeholder='SENHA' 
              style={styles.textInput} 
              autoCapitalize={false}
              secureTextEntry={true}
              placeholderTextColor = 'black'
              onChangeText={text => setSenha(text)}
            />
          )}
        />
        {errors?.senha && (
          <Text style={{ color: 'white', textAlign:'center' }}>{errors?.senha?.message}</Text>
        )}


        <View style={styles.button}>
          <Button buttonStyle={{backgroundColor: 'black', width:200,}}  title="ENTRAR"  color = 'black'  onPress = {handleSubmit(botaoInicial)} />
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