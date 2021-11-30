import React, { useState} from 'react';
import { StyleSheet, TextInput, View,Image, Text,SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';



export default function PagamentoScreen({ navigation}) {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [formapag, setFormaPag] = useState('');


  const botaoFinaliza = () => {
    navigation.push('confirmareserva');
  };

  const botaoLogout = () =>{
    navigation.push('login')
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

      <View style={{marginBottom:'60%'}}>
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
        <TextInput
          style={styles.campo}
          autoCapitalize={false}
          placeholder="FORMA DE PAGAMENTO"
          value={formapag}
          onChangeText={(text) => setFormaPag(text)}
        />
      </View>
    
      <View style={styles.botao}>
        <Button buttonStyle={{backgroundColor: 'black', width:200,}} color='black'title="FINALIZAR" onPress={botaoFinaliza} />
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