import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import {Button } from 'react-native-elements';
import { UserContext } from '../context/UserContext';
import firebase from 'firebase';

export default function CheckScreen({navigation}) {

  
  const [obs, setObs] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

  const botaoLogout = () =>{
    setUsuario({ logado: false, nome: '' });
  };

  const botaoVoltar = () =>{
    navigation.push('#')
  };

  const botaoEnvioDetalhe = () =>{
    navigation.push('confirmareserva')
  };

  return (

    <SafeAreaView> 
      <View style={styles.containerhead}>

          

        <View>
          <Text style={styles.headertexts}>PALACE HOTEL</Text>
        </View>
        

        <View style={{alignSelf:'center'}}>
          <Button buttonStyle={{backgroundColor:'black' }} title='SAIR' color='black'  onPress={botaoLogout}/> 
        </View>  
      </View>

      <ScrollView>

        <View>
          <Image style={styles.quarto} source={require('../assets/hotel.jpg')} />
        </View>

        <View style={{backgroundColor:'black',
          height:'auto',
          width:'80%',
          alignSelf:'center',
          marginBottom:80,
          padding: 15
        }}
        >
        <TextInput placeholder='DESEJA FAZER UMA OBSERVAÇÃO ?'
          style={{width:'100%', color:'white',height:90,padding:0}}
          multiline={true}
          numberOfLines={100}
          autoCapitalize={false}
          placeholderTextColor = 'white'
          onChangeText={text => setObs(text)}
        />

        </View>

        <View style={{alignSelf:'center', }}>  
          <Button buttonStyle={{backgroundColor: 'black', width:200, alignISelf:'center'}} title="ENVIAR DETALHES" color="black" onPress={botaoEnvioDetalhe} />
        </View>      
      </ScrollView>

      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  containerhead:{
    flexDirection: 'row',
    justifyContent:'space-between',
    margin:0,
    backgroundColor: 'black',
    textAlign: 'center'
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
  quarto: {
    width: 300,
    height: 200,
    alignSelf:'center',
    marginTop: '10%',
    marginBottom: 15
  },
  check:{
    borderBottomColor: '#131212',
    borderBottomWidth: 1,
    textAlign:'center',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5
  }
})