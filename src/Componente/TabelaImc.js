import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';


export default function TabelaImc() {
  const headers = ["IMC", "Classificação"];
  const dados = [
    ["Abaixo de 18.5", "Abaixo do peso"],
    ["Entre 18,6 e 24,9", "Peso ideal"],
    ["Entre 25,0 e 29,9", "Levemente acima do peso"],
    ["Entre 30,0 e 34,9", "Obesidade grau I"],
    ["Entre 35,0 e 39,9", "Obesidade grau II"],
    ["Acima 40", "Obesidade grau III"],
    
  ];

  return (
    <View style={styles.container}>
        <Table borderStyle={{borderWidth: 3, borderColor: '#00BFFF'}}>
          <Row data={headers} style={styles.head} textStyle={styles.text} />
          <Rows data={dados} textStyle={styles.text} />
        </Table>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {justifyContent: 'center', alignItems: 'center', top: 35 },
    head: { height: 60, width: 385, backgroundColor: '#87CEEB'},
    text: { margin: 6, color: '#000' }
});
