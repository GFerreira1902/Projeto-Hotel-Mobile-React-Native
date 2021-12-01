import {StatusBar} from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import {  StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import firebase from 'firebase';
import { UserContext } from '../context/UserContext.js'

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [data, setData] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

  const botaoRegistraScreen = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        setUsuario({ logado: true, nome: nome });
        return userCredential.user.updateProfile({ displayName: nome });
      })
      .catch((error) => alert(error.message));
  };

  const botaoVoltar = () =>{
    navigation.push('login')
  };

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.containerheader}>
        <Text style={styles.headertexts}>CADASTRO</Text>
      </View>

      <ScrollView style={styles.containerscrool}>
    
        <StatusBar hidden />

        
        <TextInput
          placeholder="NOME COMPLETO"
          style={styles.textInput}
          autoCapitalize={false}
          keyboardType="text"
          placeholderTextColor="black"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />

        <TextInput
          placeholder="CPF"
          style={styles.textInput}
          autoCapitalize={false}
          keyboardType="number-pad"
          placeholderTextColor="black"
          value={cpf}
          onChangeText={(text) => setCpf(text)}
        />

        <TextInput
          placeholder="DATA DE NASCIMENTO"
          style={styles.textInput}
          autoCapitalize={false}
          keyboardType="number-pad"
          placeholderTextColor="black"
          value={data}
          onChangeText={(text) => setData(text)}
        />

        <TextInput
          placeholder="TELEFONE"
          style={styles.textInput}
          autoCapitalize={true}
          keyboardType="number-pad"
          placeholderTextColor="black"
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
        />

        <TextInput
          placeholder="EMAIL"
          style={styles.textInput}
          autoCapitalize={false}
          keyboardType="email-address"
          placeholderTextColor="black"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          placeholder="SENHA"
          style={styles.textInput}
          autoCapitalize={false}
          secureTextEntry={true}
          placeholderTextColor="black"
          onChangeText={(text) => setSenha(text)}
        />

        <View style={styles.button}>
          <Button buttonStyle={{backgroundColor: 'black', width:200,}} title="CADASTRAR" color="black" onPress={botaoRegistraScreen} />
        </View>

        <View style={styles.button2}>
          <Button buttonStyle={{backgroundColor: 'black', width:200,}} title='VOLTAR' color='black' onPress={botaoVoltar}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#E8AF20'
  },
  containerscrool:{
    justifyContent: 'center',
    padding: 10,
  },
  containerheader:{
    borderWidth: 5,
    border: 'solid black 6px',
    backgroundColor: '#E8AF20',
    margin:15,
    
  
  },
  headertexts: {
    fontSize:30,
    fontWeight: 'bold',
    textAlign:'center',
    padding: 15
  },
  
  textInput: {
    marginBottom: 16,
    padding: 10,
    borderBottomColor: '#131212',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  button: {
    marginBottom: 16,
    marginTop: 30,
    alignSelf:'center'
  },
  button2: {
    marginBottom: 16,
    alignSelf:'center'
  },
});