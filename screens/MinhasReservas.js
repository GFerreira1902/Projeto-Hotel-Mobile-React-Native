import React, { useState, useContext, useEffect } from 'react';
import {StyleSheet,TextInput,View,Image,Text,SafeAreaView,FlatList, Picker,Pressable,ScrollView, Date} from 'react-native';
import { Button } from 'react-native-elements';
import { UserContext } from '../context/UserContext';
// import { Item } from '../components/Item';
import firebase from 'firebase';

export default function MinhasReservas({ navigation }) {
  const [dados, setDados] = useState([ ]);

  const [usuario, setUsuario] = useContext(UserContext);

  const botaoLogout = () => {
    setUsuario({ logado: false, nome: '' });
  };

  const botaoVoltar = () => {
    navigation.push('home');
  };

  const  alteritem =  (id) => {
    navigation.navigate('editarremover', {id: id});
  }

 useEffect(() =>{
   const minhasreservas = [];
   firebase
    .firestore()
    .collection('minhasreservas')
    .onSnapshot((snapshot) => {
     snapshot.docs.forEach((doc)=> {
        console.log(doc.data());
        const {nome,email,selectedformapag,sobrenome, checkin, checkout, valorpg} = doc.data();   
        minhasreservas.push({ 
          id:doc.id,
          nome:nome,
          selectedformapag:selectedformapag,
          checkin: checkin,
          checkout: checkout,
          valorpg: valorpg 
        });
      });
      setDados([...minhasreservas]);
     });
    },[]);
  const Item = ({ item }) => {
    return (
      
      <View>
        
        <View style={styles.caixascrool}>
          <Pressable onPress={() => alteritem(item.id)}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Nome: {item.nome}</Text>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Pagamento em: {item.selectedformapag}</Text>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Entrada em: {item.checkin}</Text>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Saída em: {item.checkout}</Text>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Valor a pagar em {item.valorpg}</Text>       
          </Pressable>    
        </View>
        
      </View>  
      
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.containerhead}>
        <View style={{ alignSelf: 'center' }}>
          <Button
            buttonStyle={{ backgroundColor: 'black' }}
            title="<--"
            color="black"
            onPress={botaoVoltar}
          />
        </View>

        <View>
          <Text style={styles.headertexts}>PALACE HOTEL</Text>
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Button
            buttonStyle={{ backgroundColor: 'black' }}
            title="SAIR"
            color="black"
            onPress={botaoLogout}
          />
        </View> 
      </View>

      <ScrollView>
        <View>
          <Text style={{fontSize: 30, fontWeight:'bold', textAlign: 'center', marginBottom:'10%'}}>Suas Reservas</Text>
        </View>
        <FlatList
          data={dados}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />  
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  campo: {
    justifytext: 'center',
    marginBottom: 16,
    padding: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  botao: {
    marginBottom: 16,
    alignSelf: 'center',
  },

  containerhead: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    margin: 0,
    backgroundColor: 'black',
    textAlign: 'center', 
    marginBottom: '10%',
  },
  header: {
    padding: 15,
    fontSize: 20,
    color: '#E8AF20',
  },
  headertexts: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E8AF20',
    padding: 15,
  },
  caixascrool: {
    padding:5,
    fontSize: 30,
    backgroundColor: 'black', 
    height: 140,
    width:'75%',
    alignSelf: 'center',
    marginBottom: '5%',
    borderWidth: 5, 
    borderColor: '#E8AF20' 
  }, 
});