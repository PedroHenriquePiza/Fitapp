import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import axios from 'axios';

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState("");
  const [sexualidade, setSexualidade] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrarUsuario = async () => {
    if (nome === "" || sexualidade === "" || idade === "" || email === "" || senha === "") {
      Alert.alert("Erro", "Todos os campos devem ser preenchidos.");
      return;
    }

    try {
      const response = await axios.post('https://fitapp-tcc.azurewebsites.net/api/usuario', {
        nome: nome,
        sexualidade: sexualidade,
        idade: idade,
        email: email,
        senha: senha
      });

      console.log('Usuário cadastrado com sucesso:', response.data);
      navigation.navigate('ManterForma');

    } catch (error) {
      console.log('Erro ao cadastrar usuário:', error);
      // Trate os erros adequadamente
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={{fontSize: 35, fontWeight: 'bold', color: '#FF69B4'}}>FitApp</Text>
      </View>

      <View style={styles.title}>
        <Text style={{fontSize: 20}}>Insira seus dados abaixo:</Text>
      </View>
      <View style={styles.view}>
        <TextInput placeholder="Insira seu e-mail:" style={styles.textinput} onChangeText={text => setEmail(text)} />
      </View>
      <View style={styles.linha} />

      <View style={styles.view}>
        <TextInput placeholder="Insira sua senha:" style={styles.textinput} onChangeText={text => setSenha(text)} keyboardType="numeric" />
      </View>
      <View style={styles.linha} />

      <View style={styles.view}>
        <TextInput placeholder="Insira seu nome:" style={styles.textinput} onChangeText={text => setNome(text)} />
      </View>
      <View style={styles.linha} />

      <View style={styles.view}>
        <TextInput placeholder="Insira seu gênero:" style={styles.textinput} onChangeText={text => setSexualidade(text)} />
      </View>
      <View style={styles.linha} />

      <View style={styles.view}>
        <TextInput underlineColor="purple" maxLength={3} placeholder="Insira sua idade:" style={styles.textinput} onChangeText={text => setIdade(text)}  keyboardType="numeric" />
      </View>
      
      <View style={styles.linha} />

      <TouchableOpacity style={styles.buttonCadastro} onPress={cadastrarUsuario}>
        <Text style={{color: '#FFF'}}>CADASTRO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',

  },

  title: {
    fontSize: 60,
    color: '#000',
    bottom: 45

  },

  logo: {
    color: '#FF69B4',
    bottom: '15%',
    left: '30%',
    bottom: '18%'

  },

  buttonCadastro: {
    width: 300,
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    color: '#FFF',
    fontSize: 25,
    top: 65,
    elevation: 10


  },
  textinput: {
    width: '85%',
    height: 40,
    backgroundColor: 'white',
    fontSize: 20,

  },
  linha: {
    width: '85%',
    height: 2,
    backgroundColor: '#000',
    marginBottom: 40
  },
  view: {
    width: '85%'
  }
});
