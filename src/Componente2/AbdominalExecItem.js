import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const AbdominalExecItem = ({ abdomen }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: abdomen.animacao }} style={styles.imagem} />
      <Text style={styles.nome}>{abdomen.nome}</Text>
      <Text style={styles.repeticoes}>{abdomen.repeticoes}</Text>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
    bottom:40,
  },
  imagem: {
    width: 400,
    height: 300,
    resizeMode: 'stretch',
    borderRadius: 10,
    
  },
  nome: {
    marginTop: 75,
    fontSize: 24,
    fontWeight: "bold",
  },
  repeticoes: {
    marginTop: 25,
    fontSize: 24,
    
  },
});

export default AbdominalExecItem;