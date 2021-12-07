import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, Picker, ScrollView, SafeAreaView } from 'react-native';
import { UserContext } from '../context/UserContext';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import firebase from 'firebase';

export default function EditRemoveScreen({ navigation, route }) {
  const { id } = route.params;
  const [usuario, setUsuario] = useContext(UserContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [checkin, setCheckin] = useState(new Date());
  const [checkout, setCheckout] = useState(new Date());
  const [valorpg, setValorpg] = useState("");
  const [selectedformapag, setSelectedformapag] = useState('');

  const botaoLogout = () =>{
    setUsuario({ logado: false, nome: '' });
  };

  const botaoVoltar = () =>{
    navigation.push('reservas')
  };

  const pressionaApagar = () => {
    const docRef = firebase.firestore().collection('minhasreservas').doc(id); 
    docRef.delete();
    navigation.push('reservas');
  };

  const pressionaAlterar = () => {  
    const docRef = firebase.firestore().collection('minhasreservas').doc(id);  
    docRef.set({ 
      nome: nome,
      selectedformapag: selectedformapag,
      checkin: checkin,
      checkout: checkout,
      valorpg: valorpg
    });
    navigation.push('reservas');
  };

  useEffect(async () => {
    const docRef = firebase.firestore().collection('minhasreservas').doc(id);
    const doc = await docRef.get();
    const { nome, selectedformapag, checkin, checkout, valorpg } = doc.data();
    setNome(nome);
    setSelectedformapag(selectedformapag);
    setCheckin(checkin),
    setCheckout(checkout),
    setValorpg(valorpg)
  }, []);

  return (
   <SafeAreaView style={{flex: 1, justifyContent:'center'}}> 
    <View style={styles.containerhead}>

      <View style={{alignSelf:'center'}}>
        <Button buttonStyle={{backgroundColor:'black', color:'#E8AF20'}} title='<--'   onPress={botaoVoltar}/>
      </View>  

      <View>
        <Text style={styles.header}>PALACE HOTEL</Text>  
      </View>
        

      <View style={{alignSelf:'center'}}>
        <Button buttonStyle={{backgroundColor:'black' }} title='SAIR' color='black'  onPress={botaoLogout}/>
      </View>  
    </View>

    <ScrollView style={styles.conteudo}>

      <View>
        <Text style={{fontSize: 30, fontWeight:'bold', textAlign: 'center',  marginBottom:'10%'}}>Informações</Text> 
      </View>
      <TextInput
        style={styles.campo}
        autoCapitalize={true}
        placeholder="nome"
        value={nome}
        onChangeText={(text) => setNome(text)} 
      />
      
      <Picker
        selectedValue={selectedformapag}
        style={{ height: 50, width: '95%', marginBottom: '10%', alignSelf: 'center' }}
        onValueChange={(itemValue, itemIndex) => setSelectedformapag(itemValue)}> 
          <Picker.Item label="Dinheiro" value="Dinheiro" />
          <Picker.Item label="Pix" value="Pix" />
          <Picker.Item label="Cartão de Crédito" value="Cartão de Crédito" />
          <Picker.Item label="Cartão de Débito" value="Cartão de Débito" />
      </Picker>
        
      <View>
        <Button buttonStyle={{backgroundColor: 'black', width:'40%' , marginTop: '5%', alignSelf: 'center' }} title="Alterar" color='black' onPress={pressionaAlterar} />
        <Button buttonStyle={{backgroundColor: 'black', width:'40%' , marginTop: '5%',  alignSelf: 'center' }} title="Cancelar Reserva" color='black' onPress={pressionaApagar} />
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
    textAlign: 'center',
    marginBottom: '10%'
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
  campo: {
    marginBottom: 16,
    padding: 10,
    borderBottomColor: '#bbb', 
    borderBottomWidth: 1,
    width: '95%',
    alignSelf: 'center',
  },
  
});