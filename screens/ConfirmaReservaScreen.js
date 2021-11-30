import React, { useState } from 'react';
import { Text,TextInput, View, StyleSheet,Image, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

export default function ConfirmaReservaScreen({navigation}) {

  const botaoTelaInicial = () =>{
    navigation.push('home')
  };

  return (
  
  
    <SafeAreaView >

      <View style={styles.containerhead}>

        <View>
          <Text style={styles.headertexts}>PALACE HOTEL</Text>
        </View>

      </View>
 
     
      <ScrollView>

        <View style={{backgroundColor:'black',height:'auto',width:'80%',alignSelf:'center',marginTop:'30%', padding: 40}}>
        
          <Text style={{width:'100%', color:'white',padding:0,textAlign:'center'}}>
            SUA RESERVA FOI FEITA, PAGUE COM A FORMA SELECIONADA NO DIA DE CHECK-IN PRESENCIALMENTE, AGUARDAMOS VOCÊ!!
          </Text>

        </View>

        <View style={{justifyContent:'center',alignSelf:'center'}}>

          <Button  buttonStyle={{backgroundColor: 'black', width:200, marginTop:'70%'}} color='black' title="TELA INICIAL" onPress={botaoTelaInicial}/>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
   
    color:'white',
    padding:15,
    justifytext:'center',
    justifyContent: 'center',
    textAlign:'center',
     
  },
  containerhead:{
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
   
});
