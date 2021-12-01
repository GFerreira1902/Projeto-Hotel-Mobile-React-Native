import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, View,Image, Text,SafeAreaView,Picker } from 'react-native';
import { Button } from 'react-native-elements';
import { UserContext } from '../context/UserContext';



export default function MinhasReservas({ navigation}) {

  const [usuario, setUsuario] = useContext(UserContext);

  const botaoLogout = () =>{
    setUsuario({ logado: false, nome: '' });
  };

  const botaoVoltar = () =>{
    navigation.push('check')
  };

  

  return (

    <SafeAreaView>

      <View style={styles.containerhead}>

        <View style={{alignSelf:'center'}}>
          <Button  buttonStyle={{backgroundColor: 'black'}} title='<--' color='black'  onPress={botaoVoltar}/> 
        </View>  

        <View>
          <Text style={styles.headertexts}>PALACE HOTEL</Text>
        </View>

        <View style={{alignSelf:'center'}}>
          <Button  buttonStyle={{backgroundColor: 'black'}} title='SAIR' color='black'  onPress={botaoLogout}/>
        </View>  
      </View> 
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent:'center',
    padding: 8,
  },
  campo: {
    
    justifytext:'center',
    marginBottom: 16,
    padding: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    textAlign:"center",
    marginHorizontal:10
    
  },
  botao: {
    marginBottom: 16,
    alignSelf:'center'
  },

  containerhead:{
    flexDirection: 'row',
    justifyContent:'space-between', 
    margin:0,
    backgroundColor: 'black',
    textAlign: 'center',
    marginBottom:'30%'
  },
 header:{   
    padding:15,
    fontSize: 20,
    color: '#E8AF20'

  },
  headertexts: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    color: '#E8AF20',
    padding:15
  },
});