import React, { useState, useContext } from 'react';
import {  StyleSheet,Text, View, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import firebase from 'firebase';

import { UserContext } from '../context/UserContext';

export default function InicialScreen({ navigation }) {

  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

  const botaoLogout = () =>{
    setUsuario({ logado: false, nome: '' });
  };

  const botaoModal = () =>{
    navigation.push('check')
  };

  const botaoReservas = () =>{
    navigation.push('reservas')
  };


  return (

    <SafeAreaView> 
      <View style={styles.containerhead}>
      
          <Text style={styles.header}>PALACE HOTEL</Text>           
        
          <Button buttonStyle={{backgroundColor: 'black', padding:15}} title='SAIR' color='black'  onPress={botaoLogout}/> 
      </View>

      

      <ScrollView style={{marginBottom: '30%'}}>        
        <View>
          <Button buttonStyle={{backgroundColor: 'black',  width:'40%' , marginTop: '2%', alignSelf:'center'}} title='Minhas Reservas'  onPress={botaoReservas}/> 
        </View>  
        <View style={styles.caixascrool}>

          <View style={{}}>

            <Text style={{fontSize:20, fontWeight: 'bold', paddingBottom: 25, marginTop: 15}}>Quarto Básico</Text>
            <Button buttonStyle={{backgroundColor: 'black',  width:'40%' ,marginHorizontal:0}} title='ESCOLHER QUARTO'  onPress={botaoModal}/>     
            
          </View>
          <Image style={styles.quarto} source={require('../assets/basic.png')} />  

        </View>
       

        <View style={styles.caixascrool}>
          
          
          <View style={{}}>

            <Text style={{fontSize:20, fontWeight: 'bold', paddingBottom: 25, marginTop: 15}}>Quarto Premium</Text>
            <Button buttonStyle={{backgroundColor: 'black',  width:'40%' ,marginHorizontal:0}} title='ESCOLHER QUARTO'  onPress={botaoModal}/>     
            
          </View>
          <Image style={styles.quarto} source={require('../assets/premium.png')} /> 
        </View>

        <View style={styles.caixascrool}> 
          
          
          <View style={{}}>

            <Text style={{fontSize:20, fontWeight: 'bold', paddingBottom: 25, marginTop: 15}}>Quarto Deluxe</Text>
            <Button buttonStyle={{backgroundColor: 'black',  width:'40%' ,marginHorizontal:0}} title='ESCOLHER QUARTO'  onPress={botaoModal}/>     
            
          </View>
          <Image style={styles.quarto} source={require('../assets/deluxe.png')} />  
          
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
  containerfilter:{
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: '#E8AF20',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 4
  },
 header:{   
    padding:12,
    fontSize: 20,
    color: '#E8AF20',
    marginHorizontal: 10,
  },
  check:{
    borderBottomColor: '#131212',
    borderBottomWidth: 1,
    textAlign:'center',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5, 
    fontSize: 5,
  },  
  caixascrool: {
    marginTop:20,
    marginHorizontal:15,
    padding:5,
    fontSize: 30,
    backgroundColor: '#E8AF20',
    borderWidth: 5,
    border:'solid black 6px',
    height: 180,
    width:'90%',
    
  },

  quarto: {
    width: '45%',
    height:'100%',
    alignSelf:'flex-end',
    marginTop: -125
  },
  
})