import React, { useState, useContext } from 'react';
import {  StyleSheet,Text, View, TextInput, SafeAreaView, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import firebase from 'firebase';

import { UserContext } from '../context/UserContext';

export default function InicialScreen({ navigation }) {

  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [usuario, setUsuario] = useContext(UserContext);

  const botaoLogout = () =>{
    setUsuario({ logado: false, nome: '' });
  };

  const botaoPagamento = () =>{
    navigation.push('pagamento')
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

            <Text style={{fontSize:20, fontWeight: 'bold', paddingBottom: 25, marginTop: 15,  }}>Quarto Básico</Text>
            <Button buttonStyle={{backgroundColor: 'black',  width:'40%' ,marginHorizontal:0, marginTop: 45}} title='ESCOLHER QUARTO'  onPress={botaoPagamento}/>      
            
          </View>
          <Image style={styles.quarto} source={require('../assets/basic.png')} />

          <View style={{marginTop: '2%'}}>
           
            <Text style={styles.textinfo}>. Ar-Condicionado</Text> 
            <Text style={styles.textinfo}>. Varanda com vista para parque ecológico</Text> 
            <Text style={styles.textinfo}>. Cama para Casal</Text>
            <Text style={styles.textinfo}>. Tv a Cabo</Text>
            <Text style={styles.textinfo}>. Tecidos de Cama Premium</Text>
            
            <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: '2%'}}>Valor: 310,79</Text>
          </View>
        </View>
       

        <View style={styles.caixascrool}>
          
          
          <View style={{}}>

            <Text style={{fontSize:20, fontWeight: 'bold', paddingBottom: 25, marginTop: 15}}>Quarto Premium</Text>
            <Button buttonStyle={{backgroundColor: 'black',  width:'40%' ,marginHorizontal:0 , marginTop: 45}} title='ESCOLHER QUARTO'  onPress={botaoPagamento}/>      
            
          </View>
          <Image style={styles.quarto} source={require('../assets/premium.png')} />

          <View style={{marginTop: '2%'}}>
           
            <Text style={styles.textinfo}>. Ar-Condicionado</Text> 
            <Text style={styles.textinfo}>. Varanda Privilegiada</Text> 
            <Text style={styles.textinfo}>. Cama para Casal</Text>
            <Text style={styles.textinfo}>. Tv a Cabo</Text>
            <Text style={styles.textinfo}>. Tecidos de Cama de Primeira</Text>
            <Text style={styles.textinfo}>. Quarto com detalhes em madeira</Text>
            <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: '2%'}}>Valor: 350,00</Text> 

          </View>
        </View>

        <View style={styles.caixascrool}> 
          
          
          <View style={{}}>

            <Text style={{fontSize:20, fontWeight: 'bold', paddingBottom: 25, marginTop: 15}}>Quarto Deluxe</Text>
            <Button buttonStyle={{backgroundColor: 'black',  width:'40%' ,marginHorizontal:0 , marginTop: 45}} title='ESCOLHER QUARTO'  onPress={botaoPagamento}/>     
            
          </View>
          <Image style={styles.quarto} source={require('../assets/deluxe.png')} />  
          
          <View style={{marginTop: '2%'}}>
           
            <Text style={styles.textinfo}>. Ar-Condicionado</Text> 
            <Text style={styles.textinfo}>. Varanda enorme com vista para o mar</Text>   
            <Text style={styles.textinfo}>. Cama para Casal</Text>
            <Text style={styles.textinfo}>. Tv a Cabo</Text>
            <Text style={styles.textinfo}>. Tecidos de Cama de Primeira</Text>
            <Text style={styles.textinfo}>. Quarto com detalhes em madeira</Text>
            <Text style={styles.textinfo}>. Direito a Jantar romântico</Text>
            <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: '2%'}}>Valor: 430,29</Text>

          </View>
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
    fontWeight: 'bold'
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
    height: 415,  
    width:'90%' 
    
  },

  quarto: {
    width: '45%',
    height:'43%',
    alignSelf:'flex-end',
    marginTop: -170,
  },

  textinfo: {
    fontWeight: 'bold',
    marginTop: "2%"
  },
  
})