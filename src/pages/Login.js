import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.title}>
        <Text>Personal Trainer domestico</Text>
      </View>

      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Logar")}>
        <Text>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCadastro} onPress={() => navigation.navigate("Cadastro")}>
        <Text style={{ color: '#fff' }}>CADASTRAR</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },

  title: {
    fontSize: 25,
    color: '#FFF',
    bottom: 170

  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
  },
  buttonLogin: {
    width: 300,
    height: 50,
    backgroundColor: '#40E0D0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    color: '#000',
    fontSize: 25,
    top: 100
  },

  buttonCadastro: {
    width: 150,
    height: 50,
    alignItems: 'center',
    top: 115
  },
  
});
