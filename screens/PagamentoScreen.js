import React, { useState, useContext } from 'react';
import { StyleSheet, TextInput, View,Image, Text,SafeAreaView,Picker } from 'react-native';
import { Button } from 'react-native-elements';
import { UserContext } from '../context/UserContext';
import DatePicker from 'react-native-datepicker';
import firebase from 'firebase';



export default function PagamentoScreen({ navigation}) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [selectedformapag, setSelectedformapag] = useState("");
  const [checkin, setCheckin] = useState(new Date());
  const [checkout, setCheckout] = useState(new Date());
  const [valorpg, setValorpg] = useState("");
  const [usuario, setUsuario] = useContext(UserContext); 

  const botaoFinaliza = () => {
    firebase.firestore().collection('minhasreservas').add({ 
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      selectedformapag: selectedformapag,
      checkin: checkin,
      checkout: checkout,
      valorpg: valorpg
    });
    navigation.push('check');
  };

  const botaoLogout = () =>{
    setUsuario({ logado: false, nome: '' });
  };

  const botaoVoltar = () =>{
    navigation.push('home')
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

      <View style={{}}>
        <View>
          <Text style={{fontSize: 30, fontWeight:'bold', textAlign: 'center', marginBottom:'10%'}}>Pagamento</Text>
        </View>
        <TextInput
          style={styles.campo}
          autoCapitalize={false}
          placeholder="NOME"
          value={nome} 
          onChangeText={(text) => setNome(text)}
        /> 

        <TextInput
          style={styles.campo}
          autoCapitalize={false}
          placeholder="SOBRENOME"
          value={sobrenome}
          onChangeText={(text) => setSobrenome(text)}
        />

        <TextInput
          style={styles.campo}
          autoCapitalize={false}
          keyboardType="email-address"
          placeholder="E-MAIL"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Picker
        selectedValue={valorpg}
        style={{ height: 50, width: '100%', alignSelf: 'center', marginLeft:10, marginBottom: 16 }}   
        onValueChange={(itemValue, itemIndex) => setValorpg(itemValue)}>
          <Picker.Item label="Quarto Básico: 310,79" value="Quarto Básico: 310,79" />
          <Picker.Item label="Quarto Premium: 350,00" value="Quarto Premium: 350,00" />
          <Picker.Item label="Quarto Deluxe: 430,29" value="Quarto Deluxe: 430,29" /> 
        </Picker>

        <Picker
        selectedValue={selectedformapag}
        style={{ height: 50, width: '100%', alignSelf: 'center', marginLeft:10, marginBottom: 16 }}   
        onValueChange={(itemValue, itemIndex) => setSelectedformapag(itemValue)}>
          <Picker.Item label="Dinheiro" value="Dinheiro" />
          <Picker.Item label="Pix" value="Pix" />
          <Picker.Item label="Cartão de Crédito" value="Cartão de Crédito" />
          <Picker.Item label="Cartão de Débito" value="Cartão de Débito" />
        </Picker>

        <View style={{marginBottom: 16}}>   

          <Text style = {{marginLeft:12}} >CHECK - IN</Text> 
          <DatePicker placeholder='CHECK - IN' 
            style={{marginLeft: 12, width: '97%',marginBottom: 16}} 
            date = {checkin}  
            format= 'DD/MM/YYYY'
            placeholderTextColor = 'black'
            onDateChange= {setCheckin}
          />

          <Text style = {{marginLeft:12}} >CHECK-OUT</Text>
          <DatePicker placeholder='CHECK - OUT' 
            style={{marginLeft: 12, width: '97%', marginBottom: 20}}
            date = {checkout}   
            format= 'DD/MM/YYYY' 
            placeholderTextColor = 'black'
            onDateChange= {setCheckout} 
          />
        </View>   
      </View>

      
          
      
    
      <View style={styles.botao}>
        <Button buttonStyle={{backgroundColor: 'black', width:200,}} color='black'title="FINALIZAR" onPress={botaoFinaliza} />
      </View>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  campo: {
    
    justifytext:'center',
    marginBottom: 16,
    padding: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1, 
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
    marginBottom:'5%'
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